var gameState = 0;
var playerCount;
var database;
var form, player, game;
var allPlayers;
var scoree,startScreen,gameArea;
var player1Number,player1Dice,player2Dice,player2Number;
var type,submit, goGame = false;
var feedbackInput;
var clickTime = 0;
var result1 = 0, result2 = 0, result3 = 0;

function preload(){
}


function setup(){
  noCanvas();
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

  if(goGame === true){
    game.update(1);
  }

  if(goGame === true){
    clear();
    scoree = document.querySelector('.score');
    startScreen = document.querySelector('.startScreen');
    startScreen.addEventListener('click', start);
    container = document.querySelector('.container');
    endScreen = document.querySelector('.endScreen');
    feeedback = document.querySelector('.feedback');
    submitfeedback = document.querySelector('.SubmitFeedback');
    submit = document.querySelector('.submit');

    game.play();
  }

  if(gameState === 2) {
    game.end();
  }
}


ludoGame = () => {
  player1Number = floor(random(1,7));
  player1Dice = `images/dice${player1Number}.png`;
  document.getElementById('check1').setAttribute('src',player1Dice);

  player2Number = floor(random(1,7));
  player2Dice = `images/dice${player2Number}.png`;
  document.getElementById('check2').setAttribute('src',player2Dice);

  if(player1Number > player2Number) {
    document.querySelector('h1').innerHTML="Player 1 won :)";
    result1++;
  } else if (player2Number > player1Number) {
    document.querySelector('h1').innerHTML="Player 2 won :)";
    result2++;
  } else {
    document.querySelector('h1').innerHTML="DRAW!!";
    result3++;
  }

  clickTime++;

  player.updateClick(clickTime,result1,result2,result3);
}



function gamePlay() {
  if(gameState === 1) {

    window.requestAnimationFrame(gamePlay);
  }
}

function start() {
  container.classList.remove('hide');
  startScreen.classList.add('hide');
  feeedback.classList.remove('hide');

  window.requestAnimationFrame(gamePlay);

  form.reset.position(200,200);
  form.greeting.hide();
}

Feedback = () => {
  feedbackInput = createInput("");
  feedbackInput.parent(submitfeedback);
  feeedback.classList.add('hide');
  submitfeedback.classList.remove('hide');
}


SubmitF = () => {
  var feedback = feedbackInput.value();
  player.feedback = feedback;
  player.updateFeedback();
  feedbackInput.hide();
  submitfeedback.classList.add('hide');
  feeedback.classList.remove('hide');
}