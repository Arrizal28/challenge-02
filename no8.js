const dataPenjualanNovel = [
    {
      idProduct: 'BOOK002421',
      namaProduk: 'Pulang - Pergi',
      penulis: 'Tere Liye',
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduct: 'BOOK002351',
      namaProduk: 'Selamat Tinggal',
      penulis: 'Tere Liye',
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Garis Waktu',
      penulis: 'Fiersa Besari',
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Laskar Pelangi',
      penulis: 'Andrea Hirata',
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    },
  ];

function getInfoPenjualan(dataPenjualanNovel){
  const sum = dataPenjualanNovel.reduce((accumulator, object) => {
    return accumulator + object.hargaJual;
  }, 0);

  const totalKejual = dataPenjualanNovel.reduce((accumulator, object) => {
    return accumulator + object.totalTerjual;
  }, 0);

  const totalStok = dataPenjualanNovel.reduce((accumulator, object) => {
    return accumulator + object.sisaStok;
  }, 0);

  const totalBeli = dataPenjualanNovel.reduce((accumulator, object) => {
    return accumulator + object.hargaBeli;
  }, 0);

  const ids = dataPenjualanNovel.map(object => {
    return object.totalKejual;
  });

  let totalModal = totalBeli*totalStok
  let totalKejualFix = sum*totalKejual
  let untung = totalKejualFix - totalModal
  let laba = untung/totalModal*100
  let persen = Math.floor(laba)

  const idsa = dataPenjualanNovel.map(object => {
    return object.totalTerjual;
  });
  
  const max = Math.max.apply(null, idsa);
  
  let resultBuku = dataPenjualanNovel.find(item => item.totalTerjual === max);
  let resultPenulis = dataPenjualanNovel.find(item => item.totalTerjual === max);

  let	number_string = totalKejualFix.toString(),
	sisa 	= number_string.length % 3,
	rupiah 	= number_string.substring(0, sisa),
	ribuan 	= number_string.substring(sisa).match(/\d{3}/g);
		
  if (ribuan) {
    separator = sisa ? '.' : '';
    rupiah += separator + ribuan.join('.');
  }

  let	number_string2 = totalModal.toString(),
	sisa2 	= number_string2.length % 3,
	rupiah2 	= number_string2.substring(0, sisa2),
	ribuan2 	= number_string2.substring(sisa2).match(/\d{3}/g);
		
  if (ribuan2) {
    separator2 = sisa2 ? '.' : '';
    rupiah2 += separator2 + ribuan2.join('.');
  }


  let semuaHasil = {
    totalKeuntungan: 'Rp. ' + rupiah,
    totalModal: 'Rp. ' + rupiah2,
    persentaseKeuntungan: persen + '%',
    produkBukuTerlaris: resultBuku.namaProduk,
    penulisTerlaris: resultPenulis.penulis
  }
  return semuaHasil
}

console.log(getInfoPenjualan(dataPenjualanNovel))