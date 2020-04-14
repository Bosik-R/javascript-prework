{
function playGame(playerInput){
  clearMessages();
  // Funkcja podporządkująca wybór urzytkownika do zmiennej liczb oraz losowanej przez komputer
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
    //return 'nieznany ruch';
  }

  // Funkcja porównująca input urzytkownika z losowaniem komputera

  function displayResult(argComputerMove, argPlayerMove){
    if ( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    console.log(argComputerMove, argPlayerMove);
    printMessage ('TY wygrywasz!');
      }else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage ('JA wygrywam!');
      }else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        printMessage ('MAMY remis!');
      }else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage ('TY wygrywasz!');
      }else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage ('JA wygrywam!');
      }else if (argComputerMove == 'papier' && argPlayerMove == 'papier'){
        printMessage ('MAMY remis!');
      }else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage ('TY wygrywasz!');
      }else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage ('JA wygrywam!');
      }else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
        printMessage ('MAMY remis!');
    }
  }

  // losowanie zmiennej przez komputer

  const randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  const argComputerMove = getMoveName(randomNumber);

  console.log('Gracz wybrał: ' + playerInput);

  const argPlayerMove = getMoveName(playerInput);

  // Wyświetlenie wyniku gry
  displayResult(argComputerMove,argPlayerMove);
}
document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1)
});

document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});
}
