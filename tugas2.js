//2. Reverse word
const reverseWords = (words) => {
    const splitWords = words.split(' ');
    splitWords.reverse();
    const resultWords = splitWords.join(' ');
    
    console.log(resultWords);

}

reverseWords('saya belajar javascript');