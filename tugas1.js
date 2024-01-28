//1. Deteksi palindrom
const cekPalindrom = (word) => {
    if(typeof word !== 'string'){
        console.log('Mohon masukkan huruf');
        return;
    }
    const wordLowerCase = word.toLowerCase()
    const splitWord = wordLowerCase.split('');
    splitWord.reverse();
    const resultWord = splitWord.join('')

    if(resultWord === wordLowerCase){
        console.log('Palindrom');
    }else {
        console.log('Tidak palindrom')
    }
}

cekPalindrom('malam')