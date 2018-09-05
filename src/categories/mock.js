export default [
  {
    id: 1,
    name: 'Compósitos',
    categories: [
      { id: 11, name: 'Naturais' },
      { id: 12, name: 'Sintéticos' },
      { id: 13, name: 'Mixto' },
    ],
  },
  {
    id: 2,
    name: 'Poliméricos',
    categories: [
      {
        id: 21,
        name: 'Plásticos',
        categories: [
          { id: 211, name: 'Naturais' },
          { id: 212, name: 'Sintéticos' },
        ],
      },
      {
        id: 22,
        name: 'Fibras',
        categories: [
          { id: 221, name: 'Naturais' },
          { id: 222, name: 'Sintéticos' },
        ],
      },
      {
        id: 23,
        name: 'Borracha',
        categories: [
          { id: 231, name: 'Naturais' },
          { id: 232, name: 'Sintéticos' },
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'Metais',
    categories: [
      { id: 31, name: 'Ferrosos' },
      { id: 32, name: 'Não Ferrosos' },
    ],
  },
]
