function solution(P, C) {
  //Provide Your solution here 
  // P - player
  // C - Court
  var playersPerGame = 2;
  if(C<1){
    return 0;
  }
  
  if (P%playersPerGame == 0 && C >= P/playersPerGame){
    return P/playersPerGame;
  } 

  if (Math.floor(P/playersPerGame) >= C ){
    return C;
  }

  if (Math.floor(P/playersPerGame) >= C ){
    return C;
  }

  if (C >= Math.floor(P/playersPerGame)){
    return Math.floor(P/playersPerGame);
  }

}

module.exports = solution;

