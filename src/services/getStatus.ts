export const getTransactionStatus = (stat: string) => {
  switch (stat.toLocaleLowerCase()) {
    case "pending":
      return "Menunggu Pembayaran";
    case "settlement":
      return "Pembayaran Berhasil";
    case "deny":
      return "Transaksi Ditolak";
    case "cancel":
      return "Transaksi Dibatalkan";
    case "expire":
      return "Transaksi Kaldaluarsa";
    case "failure":
      return "Transaksi Gagal";
    case "expire":
      return "Transaksi Kaldaluarsa";
    default:
      return "-";
  }
};

export const getShippingStatus = (stat: string) => {
  switch (stat) {
    case "unProcessed":
      return "Belum Diproses";
    case "inProcess":
      return "Sedang Diproses";
    case "inShipping":
      return "Dikirim";
    default:
      return "-";
  }
};
