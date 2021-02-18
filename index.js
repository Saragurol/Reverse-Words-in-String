function reverseWordsInString(string) {
  let words = [];
  let startOfWord = 0;
  
  for(let i = 1; i < string.length; i++){
    let character = string[i]
    if(character === ' '){
      words.push(string.slice(startOfWord, i))
      startOfWord = i;
    } else if (string[startOfWord] === ' '){
      words.push(' ');
      startOfWord += 1;
    }
  }

  words.push(string.slice(startOfWord))
  reverseWords(words);
  return words.join('');
}
reverseWordsInString('tim is great') // 'great is tim'

function reverseWords(array){
  let start = 0;
  let end = array.length-1;
  while(start < end){
    let temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start++;
    end--;
  }
  return array;
}