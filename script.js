const clueHoldTime = 1000;
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var score = 0;
var array = [];
var playClueSequenceRunning = false;
var highscore = 0;


function startGame(){
  //initialize game variables
  array.push(Math.floor(Math.random() * 4) + 1);
  progress = 0;
  gamePlaying = true;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence()
  document.getElementById("score").innerHTML = "Score: " + score; 
}
function stopGame(){
  gamePlaying = false;
  if (score > highscore){
    highscore = score;
    alert("NEW HIGH SCORE!!!: " + highscore);
  }
  else{
    alert("Good Game. Your score was: " + score);
  }
  array = [];
  score = 0;
  document.getElementById("score").innerHTML = "Score: " + score;
  document.getElementById("hs").innerHTML = "HighScore: " + highscore;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}
function playSingleClue(btn,i){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
  if(i == progress){
    playClueSequenceRunning = false;
    console.log(playClueSequenceRunning);
  }
}
function playClueSequence(){
  playClueSequenceRunning = true;
  console.log(playClueSequenceRunning);
  guessCounter = 0; 
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + array[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,array[i], i); // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}
function loseGame(){
  stopGame();
}
function winGame(){
  stopGame();
  alert("Game Over. You won!");
}
function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying || playClueSequenceRunning){
    return;
  }
  if(array[guessCounter] == btn){
    if(guessCounter == progress){
        progress++;
        array.push(Math.floor(Math.random()*4) + 1);
        score += 10;
        document.getElementById("score").innerHTML = "Score: " + score; 
        playClueSequence();
    }
    else{
      guessCounter++;
    }
  }
  else{
    loseGame();
  }
}    

