

function kali(){
	let hargaBarang = Number(document.getElementById('harga-barang').value);
	let banyakBarang = Number(document.getElementById('banyak-barang').value);
	let hasilKali = hargaBarang * banyakBarang;
	let totalBayar = document.getElementById('total-bayar').value = hasilKali;
	kurang();
}

function kurang(){
	let besarUang = Number(document.getElementById('besar-uang').value);
	let totalBayar = Number(document.getElementById('total-bayar').value);
	hasilKurang = besarUang - totalBayar;
	document.getElementById('uang-kembali').value = hasilKurang;
	
}







