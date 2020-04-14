{
function playGame(playerInput){
  clearMessages();

  // Funkcja podporządkująca wybór urzytkownika do zmiennej oraz losowanej przez komputer

  function getMoveName(argMoveId){
    if(argMoveId == 1){
    return 'kamień';
    }else if (argMoveId == 2){
    return 'papier';
    }else {
    return "nożyce";
    }
  }

  // Funkcja porównująca input urzytkownika z losowaniem komputera

  function displayResult(argComputerMove, argPlayerMove){
    if (argComputerMove == 'kamień' && argPlayerMove == 'papier' || argComputerMove == 'papier' && argPlayerMove == 'nożyce' || argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
      printMessage ('Ty wygrałeś');
    }else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce' || argComputerMove == 'papier' && argPlayerMove == 'kamień' || argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
      printMessage ('Ja wygrałem');
    }else {
      printMessage ('Mamy remis');
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
