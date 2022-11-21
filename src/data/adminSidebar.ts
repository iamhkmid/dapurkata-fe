export const adminSidebar = [
  {
    name: "OVERVIEW",
    menu: [
      {
        name: "Dashboard",
        link: "/admin/dashboard",
        title: "OVERVIEW / Dashboard",
        desc: "Informasi Toko Online",
        subMenu: [],
      },
    ],
  },
  {
    name: "MASTER",
    menu: [
      {
        name: "Produk",
        link: "/admin/master/products/books",
        title: "MASTER / Produk",
        desc: "...",
        subMenu: [
          {
            name: "Buku",
            link: "/admin/master/products/books",
            title: "MASTER / Produk / Buku",
            desc: "Tambah, ubah dan hapus informasi buku",
          },
          {
            name: "Kategori",
            link: "/admin/master/products/categories",
            title: "MASTER / Produk / Kategori",
            desc: "Tambah, ubah dan hapus kategori buku",
          },
          {
            name: "Kepengarangan",
            link: "/admin/master/products/authors",
            title: "MASTER / Produk / Kepengarangan",
            desc: "Tambah, ubah dan hapus author buku",
          },
          {
            name: "Penerbit",
            link: "/admin/master/products/publisher",
            title: "MASTER / Produk / Penerbit",
            desc: "Tambah, ubah dan hapus penerbit buku",
          },
        ],
      },
      {
        name: "Pengguna",
        link: "/admin/master/users",
        title: "MASTER / Pengguna",
        desc: "...",
        subMenu: [],
      },
    ],
  },
  {
    name: "TRANSAKSI",
    menu: [
      {
        name: "Pesanan",
        link: "/admin/transactions/orders",
        title: "TRANSAKSI / Pesanan",
        desc: "Transaksi Pesanan",
        subMenu: [],
      },
    ],
  },
  {
    name: "LAINNYA",
    menu: [
      {
        name: "Footer",
        link: "/admin/others/footer",
        title: "LAINNYA / Footer",
        desc: "Ubah informasi pada footer website",
        subMenu: [],
      },
    ],
  },
];
