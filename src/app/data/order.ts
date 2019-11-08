export const order = [
  {
    id: 1,
    tanggal: new Date(2019, 10, 12),
    table: 'Table 2',
    zone: 'Zone 1',
    isDone: false,
    products: [
      {
        id: 1,
        name: 'Ayam Bakar Paha',
        imagePath: './../../assets/img/menu/ayam-bakar.jpg',
        quantity: 4,
        status: 'Waiting',
        price: 15000
      },
      {
        id: 2,
        name: 'Ayam Bakar Dada',

        imagePath: './../../assets/img/menu/ayam-bakar.jpg',
        quantity: 4,
        status: 'On Progress',
        price: 16000
      },
      {
        id: 3,
        name: 'Nasi Goreng',

        imagePath: './../../assets/img/menu/nasi-goreng-kencur-kemangi.jpg',
        quantity: 4,
        status: 'Ready to Serve',
        price: 16000
      },
      {
        id: 7,
        name: 'Es Teh Manis',

        imagePath: './../../assets/img/menu/es-teh-manis-2-640x447.jpg',
        quantity: 12,
        status: 'Served',
        price: 5000
      }
    ]
  },
  {
    id: 2,
    tanggal: new Date(2019, 10, 12),
    table: 'Table 1',
    zone: 'Zone 2',
    isDone: false,
    products: [
      {
        id: 1,
        name: 'Ayam Bakar Paha',
        imagePath: './../../assets/img/menu/ayam-bakar.jpg',
        quantity: 2,
        status: 'Waiting',
        price: 15000
      },
      {
        id: 2,
        name: 'Ayam Bakar Dada',

        imagePath: './../../assets/img/menu/ayam-bakar.jpg',
        quantity: 1,
        status: 'On Progress',
        price: 16000
      },
      {
        id: 3,
        name: 'Nasi Goreng',

        imagePath: './../../assets/img/menu/nasi-goreng-kencur-kemangi.jpg',
        quantity: 1,
        status: 'Ready to Serve',
        price: 16000
      },
      {
        id: 7,
        name: 'Es Teh Manis',

        imagePath: './../../assets/img/menu/es-teh-manis-2-640x447.jpg',
        quantity: 4,
        status: 'Served',
        price: 5000
      }
    ]
  }
];
