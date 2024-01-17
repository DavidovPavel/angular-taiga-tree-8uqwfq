export const DATA = {
  text: 'Topmost',
  children: [
    {
      text: 'Top level 1',
      icon: 'https://cdn.iconscout.com/icon/free/png-24/heart-56-76703.png',
      children: [
        {
          text: 'Another item',
          children: [
            {
              text: 'Next level 1',
              icon: 'https://cdn.iconscout.com/icon/free/png-24/heart-56-76703.png',
            },
            {
              text: 'Next level 2',
              icon: 'https://cdn.iconscout.com/icon/free/png-24/heart-56-76703.png',
            },
            { text: 'Next level 3' },
          ],
        },
      ],
    },
    { text: 'Top level 2' },
    {
      text: 'Top level 3',
      children: [
        { text: 'Test 1' },
        {
          text: 'Test 2',
          icon: 'https://cdn.iconscout.com/icon/free/png-24/heart-56-76703.png',
        },
      ],
    },
  ],
};
