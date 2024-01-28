const divideAndSort = (angka) =>{
    if(typeof angka !== 'number'){
        console.log('Mohon masukkan angka!');
        return;
    }
    
    let angkaString = angka.toString();
    let splitAngka = angkaString.split('0');
    let arrayAngka = [];

    for(let i = 0; i < splitAngka.length; i++) {
        let sortingAngka = splitAngka[i].split('').sort((a, b) => a - b).join('');
        arrayAngka.push(sortingAngka);
    }
    let joinAngka = arrayAngka.join('');
    let konversiAngka = parseInt(joinAngka);

    console.log(konversiAngka);
}

divideAndSort(5956560159466056);