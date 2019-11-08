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
        id: 4,
        name: 'Sate Ayam',
        imagePath: './../../assets/img/menu/sate-aya.jpg',
        quantity: 2,
        status: 'On Progress',
        price: 18000
      },
      {
        id: 6,
        name: 'Pecel Lele',

        imagePath: './../../assets/img/menu/pecel-lele.jpg',
        quantity: 1,
        status: 'On Progress',
        price: 15000
      },
      {
        id: 11,
        name: 'Ketoprak',

        imagePath: './../../assets/img/menu/ketoprak.jpg',
        quantity: 1,
        status: 'Waiting',
        price: 16000
      },
      {
        id: 9,
        name: 'Sirup Merah Dingin',

        imagePath: './../../assets/img/menu/sirup-merah.jpeg',
        quantity: 4,
        status: 'Served',
        price: 8000
      }
    ]
  }
];
