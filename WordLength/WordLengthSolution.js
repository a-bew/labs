function wordLength(arr) {
  i = 0;
  var wordLenght = new Map();
  while(i<arr.length){
    wordLenght.set(arr[i].toLowerCase(), arr[i].length);
    i++;
  }
  return wordLenght
}

module.exports = wordLength;