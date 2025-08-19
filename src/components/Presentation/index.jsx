import React, { useRef, useState, useCallback } from 'react';
import './Presentation.scss';

export default function Presentation({ src }) {
  const iframeRef = useRef(null);
  const [overlayOpen, setOverlayOpen] = useState(false);

  // Автоматично визначаємо тип з URL
  const getTypeAndEmbedUrl = (url) => {
    if (!url) return { type: null, embedSrc: '' };

    // YouTube
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      let videoId = '';
      const patterns = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
        /youtube\.com\/v\/([^&\n?#]+)/,
      ];

      for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match) {
          videoId = match[1];
          break;
        }
      }

      return {
        type: 'youtube',
        embedSrc: videoId ? `https://www.youtube.com/embed/${videoId}` : url,
      };
    }

    // Google Drive
    if (url.includes('drive.google.com')) {
      let fileId = '';

      // Витягуємо file ID з різних форматів
      const viewMatch = url.match(/\/file\/d\/([a-zA-Z0-9-_]+)/);
      if (viewMatch) {
        fileId = viewMatch[1];
      }

      const openMatch = url.match(/[?&]id=([a-zA-Z0-9-_]+)/);
      if (openMatch) {
        fileId = openMatch[1];
      }

      return {
        type: 'pdf',
        embedSrc: fileId
          ? `https://drive.google.com/file/d/${fileId}/preview`
          : url.replace('/view', '/preview'),
      };
    }

    // Інші PDF або загальні файли
    if (url.includes('.pdf') || url.includes('docs.google.com')) {
      return {
        type: 'pdf',
        embedSrc: url,
      };
    }

    // За замовчуванням
    return {
      type: 'general',
      embedSrc: url,
    };
  };

  const { type, embedSrc } = getTypeAndEmbedUrl(src);

  const openFullscreen = useCallback(async () => {
    const el = iframeRef.current;
    if (!el) return;

    try {
      if (el.requestFullscreen) {
        await el.requestFullscreen();
      } else if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen();
      } else if (el.mozRequestFullScreen) {
        el.mozRequestFullScreen();
      } else if (el.msRequestFullscreen) {
        el.msRequestFullscreen();
      } else {
        setOverlayOpen(true);
      }
    } catch (error) {
      console.warn('Fullscreen API failed, using overlay fallback:', error);
      setOverlayOpen(true);
    }
  }, []);

  const closeOverlay = useCallback(() => {
    setOverlayOpen(false);
  }, []);

  // Обробник клавіші Escape
  React.useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && overlayOpen) {
        closeOverlay();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [overlayOpen, closeOverlay]);

  if (!src) {
    return (
      <div className="presentation-wrapper">
        <div className="error-message">Помилка: не надано посилання для відображення</div>
      </div>
    );
  }

  const Iframe = (
    <iframe
      ref={iframeRef}
      src={embedSrc}
      title="Presentation"
      width="100%"
      height={type === 'youtube' ? '420' : '600'}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      allowFullScreen
      style={{
        border: 'none',
        borderRadius: 12,
        backgroundColor: type === 'youtube' ? '#000' : '#f5f5f5',
      }}
      loading="lazy"
      onError={(e) => {
        console.error('Iframe loading error:', e);
      }}
    />
  );

  return (
    <div className="presentation-wrapper">
      <div className="iframe-container">
        {Iframe}

        <div className="presentation-controls">
          <button
            type="button"
            className="control-btn"
            onClick={openFullscreen}
            aria-label="Розгорнути на весь екран"
          >
            ⛶ Розгорнути
          </button>
          <a
            className="control-link"
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Відкрити у новій вкладці"
          >
            🔎 Відкрити у новій вкладці
          </a>
        </div>
      </div>

      {/* CSS Fullscreen fallback (оверлей) */}
      {overlayOpen && (
        <div
          className="presentation-overlay"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeOverlay();
            }
          }}
        >
          <div className="overlay-inner">
            <button
              type="button"
              className="overlay-close"
              aria-label="Закрити"
              onClick={closeOverlay}
            >
              ✕
            </button>
            <iframe
              src={embedSrc}
              title="Presentation fullscreen"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
              style={{ border: 'none' }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
