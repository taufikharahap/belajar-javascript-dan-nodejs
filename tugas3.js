const fazzFood = (harga, voucher, jarak, pajak) => {
    let diskon = 0;
    let biayaPajak = 0;
    let biayaAntar = 0;
    let biayaAntarTambahan = 0;
    let subTotal = 0;

    if(pajak){
        biayaPajak = harga * 5/100;
    }

    if(voucher === 'FAZZFOOD50'){
        diskon = harga - (harga * 50/100);
        if(diskon > 50000){
            diskon = 50000;
        }
    }

    if(voucher === 'DITRAKTIR60'){
        diskon = harga - (harga * 60/100)
        if(diskon > 30000){
            diskon = 30000;
        }
    }

    if(jarak > 2){
        biayaAntarTambahan = (jarak - 2) * 3000;
    }

    biayaAntar = 5000 + biayaAntarTambahan;

    subTotal = harga - diskon + biayaAntar + biayaPajak;

    console.log(`Harga : ${harga}`);
    console.log(`Potongan : ${diskon}`);
    console.log(`Biaya Antar : ${biayaAntar}`);
    console.log(`Pajak : ${biayaPajak}`);
    console.log(`SubTotal : ${subTotal}`);
}

fazzFood(75000, 'FAZZFOOD50', 5, true);