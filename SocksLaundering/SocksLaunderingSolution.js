
function socksLaundering(number_machine_can_wash, clean_socks, number_of_clean_socks, dirty_socks, number_of_dirty_socks) {
    var clean = {};
    maxPair = 0
    CleanUnpairedSocks = []
      
    // for cases where dirty_socks and clean_socks are one each
    if (number_of_clean_socks == 1 && number_of_dirty_socks ==1){
        maxPair = 1
      return maxPair;   
    }

    // key-value pair -> {color:count}
    clean = countSockByColor(clean_socks);

    var [cleanPairs, cleanPairsArray, cleanSock, cleanSocksArray] = segregate(clean);
    
    // Set the no of maxPairs
    maxPair+=cleanPairs*2;     
    
    CleanUnpairedSocks = Array.from(cleanSocksArray);

    dirty_socks = dirty_socks.concat(cleanSocksArray);
    
    dirtySocks = countSockByColor(dirty_socks);

    finishWashing = false;
    isTrue = true
    if (finishWashing === false){        
        while(isTrue){
            for(var j in dirtySocks){
                if (dirtySocks[j]>1 && number_machine_can_wash>1){
                    dirtySocks[j]-=2;
                    number_machine_can_wash-=2;
                    maxPair+=2;
                } else if (dirtySocks[j]==1 && number_machine_can_wash==1){
                    dirtySocks[j]-=1;
                    number_machine_can_wash-=1;
                    maxPair+=1;
                }
                if (number_machine_can_wash == 0){
                    finishWashing = true;
                    isTrue = false;
                    break
                }  
            }
            o = Object.values(dirtySocks)
            if (o.every(x=>x<=1)){
             isTrue = false;
             finishWashing = true;
            }
        }
    }
//    console.log(finishWashing,dirtySocks, finishWashing, number_machine_can_wash)
    return maxPair/2
}


function segregate(clean){
    var cleanPairs = 0;
    var cleanSock = 0;
    var cleanPairsArray = [];
    var cleanSocksArray = [];
    var temp = 0
    var temp1 = 0;

    for (var key in clean){
        
        if (clean[key] % 2 == 0){
        temp = Math.floor(clean[key]/2);
        cleanPairs += temp;
        cleanPairsArray = cleanPairsArray.concat(putSameSockColorInArray(key, temp));
        temp = 0;
        } else {
        temp1 = clean[key]%2;
        cleanSock += temp1;
        cleanSocksArray = cleanSocksArray.concat(putSameSockColorInArray(key, temp1));   
        temp1 = 0;

        temp = Math.floor((clean[key]-temp)/2); 
        cleanPairs += temp;
        cleanPairsArray = cleanPairsArray.concat(putSameSockColorInArray(key, temp));
        temp = 0;   
        }
    }
    return [cleanPairs, cleanPairsArray, cleanSock, cleanSocksArray]
}

function putSameSockColorInArray(key, count){
    var i = 0;
    var makeArray = []
    while(i<count){
        makeArray.push(key);
        i++
    }
    return makeArray;
}
 
function countSockByColor(arrayOfStrings) {
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
    
module.exports = socksLaundering;