// losowanie zmiennej przez komputer

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

if(randomNumber == 1){
  computerMove = 'kamień';

}else if(randomNumber == 2){
  computerMove = 'papier';

}else(randomNumber == 3){
  computerMove = 'nożyce';
}

let computerMove = 'nieznany ruch';

// podanie zmiennej przez urzytownika

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';

}else if(playerInput == '2'){
  playerMove = 'papier';

}else(playerInput == '3'){
  playerMove = 'nożyce';
}
 // Podanie wyniku rundy
 
if( computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ja wybrałem ' + computerMove + '. Ty wybrałeś' + playerMove ' w takim razie TY wygrywasz!');
}else if ( computerMove == 'kamień' && playerMove == 'nożyce'){
  printMessage('Ja wybrałem ' + computerMove + '. Ty wybrałeś' + playerMove ' w takim razie JA wygrywam!');
}else if( computerMove == 'kamień' && playerMove == 'kamień'){
  printMessage('Ja wybrałem ' + computerMove + '. Ty wybrałeś' + playerMove ' w takim razie MAMY remis!');
}else ( computerMove == 'kamień' && playerMove == 'nieznany ruch'){
  printMessage('Ja wybrałem ' + computerMove + '. Ty wybrałeś' + playerMove ' to liczka spoza przedziału, jeżeli nie rozumiesz tak prostych zasad to lepiej daj sobie spokuj z tą grą!');
}

if( computerMove == 'papier' && playerMove == 'nożyce'){
  printMessage('Ja wybrałem ' + computerMove + '. Ty wybrałeś' + playerMove ' w takim razie TY wygrywasz!');
}else if ( computerMove == 'papier' && playerMove == 'kamień'){
  printMessage('Ja wybrałem ' + computerMove + '. Ty wybrałeś' + playerMove ' w takim razie JA wygrywam!');
}else if( computerMove == 'papier' && playerMove == 'papier'){
  printMessage('Ja wybrałem ' + computerMove + '. Ty wybrałeś' + playerMove ' w takim razie MAMY remis!');
}else ( computerMove == 'papier' && playerMove == 'nieznany ruch'){
  printMessage('Ja wybrałem ' + computerMove + '. Ty wybrałeś' + playerMove ' to liczka spoza przedziału, jeżeli nie rozumiesz tak prostych zasad to lepiej daj sobie spokuj z tą grą!');
}

if( computerMove == 'nożyce' && playerMove == 'kamień'){
  printMessage('Ja wybrałem ' + computerMove + '. Ty wybrałeś' + playerMove ' w takim razie TY wygrywasz!');
}else if ( computerMove == 'nożyce' && playerMove == 'papier'){
  printMessage('Ja wybrałem ' + computerMove + '. Ty wybrałeś' + playerMove ' w takim razie JA wygrywam!');
}else if( computerMove == 'nożyce' && playerMove == 'nożyce'){
  printMessage('Ja wybrałem ' + computerMove + '. Ty wybrałeś' + playerMove ' w takim razie MAMY remis!');
}else ( computerMove == 'nożyce' && playerMove == 'nieznany ruch'){
  printMessage('Ja wybrałem ' + computerMove + '. Ty wybrałeś' + playerMove ' to liczka spoza przedziału, jeżeli nie rozumiesz tak prostych zasad to lepiej daj sobie spokuj z tą grą!');
}
