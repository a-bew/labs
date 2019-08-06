//Given an array of numbers
//Given a number
//This program uses the binary search algorithm to check if the number is in the array

function binarySearchOccurance(array, number) {
    //Type your solutions here
    var start = 0;
    var end = array.length-1;
    var occurance = 0;
    var count = 0;

    while(start < end ){
      // check dynamic occurrence  
      var mid = Math.floor((start+end)/2);
      if (array[start] == number){
        // check occurrence
        count++;
        occurance += countOccurrance(array, start, occurance, number);

        //return {occurance: occurance, count: count};
        break;
      } else if (array[end] == number){
        // check occurrence
        count++;  
        occurance += countOccurrance(array, end, occurance, number);

        //return {occurance: occurance, count: count};
        break;
      }

      
      if (array[mid]==number){
//        occurance += countOccurrance(array, mid, occurance, number);
        var temp = mid;
        
        // This code snippet below specifically COUNT loop and occurances. for mid value searches
        // It is special because it may be difficult to regroup as a function like countOccurance function above 
        while(array[mid]==number){
          count++
          occurance+=1;
          mid++;
        }
        mid = temp
        while(array[mid-1]==number){
          count++
          occurance+=1;
          mid--;
        }      
        break

      } else if (array[mid]<number){
        start = mid + 1;
        end -= 1;
      } else if (array[mid]>number){
        end = mid-1;
        start += 1
      }
      count++;
    }

    if (occurance == 0){
      occurance = -1;
    }
    return {occurance: occurance, count: count}
  }


  function countOccurrance(array, mid, occurance, number){
    var temp = mid;
    
    while(array[mid]==number){
      occurance+=1;
      mid++;
    }
    mid = temp
    while(array[mid-1]==number){
      occurance+=1;
      mid--;
    }
    return occurance
  }


  module.exports = binarySearchOccurance;