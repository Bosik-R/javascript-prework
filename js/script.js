function getMoveName(argMoveId){
  if(argMoveId == 1){
    console.log('komputer wylosował ' + argMoveId);
    return 'kamień';
  }else if (argMoveId == 2){
    console.log('komputer wylosował ' + argMoveId);
    return 'papier';
  }else if (argMoveId == 3){
    console.log('komputer wylosował ' + argMoveId);
    return "nożyce";
  }
  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}
function displayResult(argComputerMove, argPlayerMove){
  if ( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    console.log(argComputerMove, argPlayerMove);
    return 'TY wygrywasz!';
  }else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
    console.log(argComputerMove, argPlayerMove);
    return 'JA wygrywam!';
  }else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
    console.log(argComputerMove, argPlayerMove);
    return 'MAMY remis!';
  }
  if ( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
    console.log(argComputerMove, argPlayerMove);
    return 'TY wygrywasz!';
  }else if ( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
    return 'JA wygrywam!';
  }else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
    console.log(argComputerMove, argPlayerMove);
    return 'MAMY remis!';
  }
  if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    return 'TY wygrywasz!';
  }else if ( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
    console.log(argComputerMove, argPlayerMove);
    return 'JA wygrywam!';
  }else if( argComputerMove == 'nożyce' && argPlayerMovee == 'nożyce'){
    return 'MAMY remis!';
  }
}

// losowanie zmiennej przez komputer

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

// podanie zmiennej przez urzytownika

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

//displayResult(argComputerMove, argPlayerMove);
