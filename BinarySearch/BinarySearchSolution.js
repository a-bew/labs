//Given an array of numbers
//Given a number
//This program uses the binary search algorithm to check if the number is in the array
// it returns true if the number is in the array and false if otherwise

function binarySearch(array, number) {
  //Type your solutions here
  var start = 0;
  var end = array.length-1;
  var count = 0;
  var index = -1;

  while(start <= end ){
    var mid = Math.floor((start+end)/2);
    if (array[mid]==number){
      index = mid;
      count +=1;
      break
    } else if (array[mid]<number){
      start = mid + 1;
      count += 1;
    } else if (array[mid]>number){
      end = mid-1;
      count +=1;
    }
  }
  return {index: index, count: count}
}

module.exports = binarySearch;