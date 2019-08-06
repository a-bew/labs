function wordCount(arrayOfStrings) {
  var i = 0;
  var dict = {};
  while(i<arrayOfStrings.length){
    if (!dict.hasOwnProperty(arrayOfStrings[i])){
    dict[String(arrayOfStrings[i])] = 1;    
    } else {
    dict[String(arrayOfStrings[i])] += 1;
    }      
    i++;  
  }
  return dict;
}

module.exports = wordCount;