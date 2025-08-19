const lessons = [
  {
    id: 1,
    slug: 'vstup-do-veb-dizajnu',
    title: 'Вступ до веб-дизайну',
    subtitle: 'Що таке веб-дизайн та його принципи',
    sections: [
      {
        heading: 'Що таке веб-дизайн?',
        text: 'Веб-дизайн — це створення візуального вигляду сайту та зручної структури.',
      },
      {
        heading: 'Основні принципи',
        list: [
          'Простота — уникай перевантаження.',
          'Зручність — користувач має швидко знаходити потрібне.',
          'Ієрархія — головне повинно виділятися.',
          'Адаптивність — сайт має працювати на різних пристроях.',
        ],
      },
    ],
    callouts: [
      {
        type: 'warning',
        text: '⚡ Простота = сила. Краще менше, але зрозуміло.',
      },
    ],
  },
  {
    id: 2,
    slug: 'html-struktura-veb-storinky',
    title: 'HTML: структура веб-сторінки',
    subtitle: 'Базові теги та створення першої сторінки',
    sections: [
      {
        heading: 'Основні теги HTML',
        list: ['<!DOCTYPE html>', '<html>', '<head>', '<title>', '<body>', '<h1>–<h6>', '<p>'],
      },
      {
        heading: 'Приклад коду',
        code: `<!DOCTYPE html>
<html>
  <head>
    <title>Мій перший сайт</title>
  </head>
  <body>
    <h1>Привіт, світ!</h1>
  </body>
</html>`,
      },
    ],
  },
  {
    id: 3,
    slug: 'css-stylizaciya-sajtu',
    title: 'CSS: стилізація сайту',
    subtitle: 'Оформлення сторінок за допомогою стилів',
    sections: [
      {
        heading: 'Що таке CSS?',
        text: 'CSS визначає зовнішній вигляд HTML-елементів: кольори, відступи, розміри.',
      },
      {
        heading: 'Приклад стилів',
        code: `body {
  font-family: Arial, sans-serif;
  background: #f0f0f0;
  color: #333;
}

h1 {
  color: #0066cc;
}`,
      },
    ],
  },
];

export default lessons;
