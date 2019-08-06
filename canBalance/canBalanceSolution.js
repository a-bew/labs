//canBalance function takes an array of numbers and returns true or false based on the following conditions
//It returns true if the array can be split at any point with the sum of the numbers on one side equal to the sum of the numbers at the other side
// For example, given the array [1, 2, 3, 4, 5, 5], it will return true as the array can be split into [1, 2, 3, 4] and [5, 5] giving a sum of 10 on each side.

function canBalance(array){
  //Type your solutions here
  var start = 0;
  var end = array.slice().length-1;
  var sumFromBeginning = 0;
  var sumFromEnd = 0;
  var countIterationFL = 0; // count for lowerbound 
  var countIterationSL = 0;  // counts for upperbound
  temp = end;

  //  firstLoop(array, start, sumFromBeginning, countIterationFL);
  while(start < array.slice().length){
    sumFromBeginning+=array[start];
    countIterationFL++;    
    start++;
  }

  start = array.slice().length;
  //  result = secondLoop(array, start, sumFromEnd, sumFromBeginning, countIterationSL, countIterationFL);

  while(start>0){
    sumFromEnd+=array.slice()[start-1];
    sumFromBeginning=sumFromBeginning-array.slice()[start-1];
    countIterationSL++;
    countIterationFL--;
  start--;

    if (sumFromEnd == sumFromBeginning && sumFromEnd != 0 && sumFromBeginning != 0){
      return [countIterationFL, countIterationSL]
    }
  }

  // if (result){
  //   return [countIterationFL, countIterationSL]
  // }
  return -1
}

// function firstLoop(array, start, sumFromBeginning, countIterationFL){
//   while(start < array.slice().length){
//     sumFromBeginning+=array[start];
//     countIterationFL++;    
//     start++;
//     console.log(sumFromBeginning)
//   }
// }

// function secondLoop(array, start, sumFromEnd, sumFromBeginning, countIterationSL, countIterationFL){
//   while(start>0){
//     sumFromEnd+=array.slice()[start-1];
//     sumFromBeginning=sumFromBeginning-array.slice()[start-1];
//     countIterationSL++;
//     countIterationFL--;
//     console.log(sumFromBeginning)

//     if (sumFromEnd == sumFromBeginning){
//       return true
//     }
//     start--;
//   }
//   return 
// }

// function canBalance(array) {
//   //Type your solutions here
//   var start = 0;
//   var end = array.length-1;
//   var frombeginning = array[start];
//   var fromend = array[end];
//   var ifirsth = 0; // count for lowerbound 
//   var isecondh = 0;  // counts for upperbound

//   if (array.length<2){
//     return "array is invalid"
//   }

//   ifirsth+=1;
//   isecondh+=1;
//   while(start<=end){
//     if (frombeginning<fromend){
//       frombeginning += array[start+1];
//       ifirsth+=1;
//       start+=1
//       continue

//     } else if (frombeginning > fromend) {      
//       if (array[start+1] < 1){
//         // Checking values of "0 or negative element of "array with for when the array some negative numbers"
//         frombeginning += array[start+1];
//         ifirsth+=1;
//         start+=1
//         if (frombeginning == fromend){
//            return [ifirsth, isecondh]
//         }
//         continue  
//       }  
//       // proceed as usual
//       fromend += array[end-1];
//       isecondh+=1;
//       end-=1;     
//       continue
//     } else if (frombeginning == fromend){
//         if (ifirsth+isecondh == array.length){
//           return [ifirsth, isecondh]
//         }

//       ifirsth++;
//       isecondh++;
//       start+=1
//       end-=1;         
//       fromend += array[end-1];
//       frombeginning += array[start+1];

//       if (frombeginning == fromend){
//         // checking equality
//         if (ifirsth+isecondh == array.length){
//           return [ifirsth, isecondh]
//         }
//       }
//     }  
//   }
//   return -1
// }

module.exports = canBalance;