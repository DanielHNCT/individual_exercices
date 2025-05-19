const morseToLatin = {
	'-': "T",
	'--': "M",
	'---': "O",
	'--.': "G",
	'--.-': "Q",
	'--..': "Z",
	'-.': "N",
	'-.-': "K",
	'-.--': "Y",
	'-.-.': "C",
	'-..': "D",
	'-..-': "X",
	'-...': "B",
	'.': "E",
	'.-': "A",
	'.--': "W",
	'.---': "J",
	'.--.': "P",
	'.-.': "R",
	'.-..': "L",
	'..': "I",
	'..-': "U",
	'..-.': "F",
	'...': "S",
	'...-': "V",
	'....': "H"
  }
const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

/*
// ENCODE
const getLatinCharacterList = (text) => text.split('');
const translateLatinCharacter = (text) => latinToMorse[text.toUpperCase()];
const encode = (textToEncode) => {
	const array = getLatinCharacterList(textToEncode);
	const encodedText = array.map(word => translateLatinCharacter(word));
	return encodedText.join(' ');
}
console.log(encode('je vais bien'));


// DECODE
const getMorseCharacterList = (text) => text.split(' ');
const translateMorseCharacter = (morse) => morseToLatin[morse];
const decode = (textToDecode) => {
  const array = textToDecode.split(' / ');
  const decodedWords = array.map(word => {
    return word.split(' ').map(morse => translateMorseCharacter(morse)).join('');  
  });
  return decodedWords.join(' ');
};

console.log(decode('.--- . / ...- .- .. ... / -... .. . -. ')); 
*/

// ENCODE
const getLatinCharacterList = (text) => text.split(''); 
const translateLatinCharacter = (text) => latinToMorse[text.toUpperCase()]; 
const encode = (textToEncode) => { 
    const array = getLatinCharacterList(textToEncode); 
    const encodedText = array.map(word => translateLatinCharacter(word)); 
    return encodedText.join(' ');  
}
console.log(encode('je vais bien'));



// DECODE
const getMorseCharacterList = (text) => text.split(' '); 
const translateMorseCharacter = (morse) => morseToLatin[morse];
const decode = (textToDecode) => {
    const array = textToDecode.split(' / '); 
    
    const decodedWords = array.map(word => {
        return word.split(' ').map(morse => translateMorseCharacter(morse)).join('');  
    });
    return decodedWords.join(' '); 
};
console.log(decode('.--- . / ...- .- .. ... / -... .. . -. ')); 
