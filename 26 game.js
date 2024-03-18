const choices = ['left', 'right', 'middle'];

function computerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function userChoice(user) {
    const computer = computerChoice();
    displayChoice('user', user);
    displayChoice1('computer', computer);
    displayResult(user, computer);
}

const shootAudio=new Audio("https://github.com/AbhijithSPilicode/penalty-kick-app/blob/main/mixkit-soccer-ball-kick-2099.wav?raw=true");

function displayChoice(player, choice) {
    const imageElement = document.getElementById(`${player}Image`);
    const sideElement = document.getElementById(`${player}Side`);
    if (choice==='left'){
    imageElement.innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-xffZAeBEDVC6fRQNItB1jXQmUAI6Sli_CGQ6cxdYVA&s"  height="300px" width="300px">`;sideElement.innerHTML="Shoot to Left side of post";shootAudio.play()}
    if (choice==='right'){
    imageElement.innerHTML = `<img src="https://clipart-library.com/img1/1395874.jpg"  height="300px" width="300px">`;sideElement.innerHTML="shoot to Right side of post";shootAudio.play()}
    
    if (choice==='middle'){
    imageElement.innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA48L2cEA-yOsmQyGeV2yjzLtQ9_Zn5cWltg&s" width="300px" height="300px">`;sideElement.innerHTML="shoot to Middle of post";shootAudio.play()}
    
}
function displayChoice1(player, choice) {
    const imageElement = document.getElementById(`${player}Image`);
    const sideElement = document.getElementById(`${player}Side`);
    if (choice==='left'){
    imageElement.innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJwV2zf7nu76BiyvdwOi8YnHvdlgckBm5iow&s"  height="300px" width="300px">`;sideElement.innerHTML="Goali jumped to left side of post"}
    if (choice==='right'){
    imageElement.innerHTML = `<img src="https://media.istockphoto.com/id/1208252959/photo/soccer-player-goalkeeper-man-silhouette-shadow-isolated-white-background.jpg?s=170667a&w=is&k=20&c=K1WZjyFRtVNS-Mjr2LNUAgpen041zVBuWHyaVIOt8BQ="  height="300px" width="300px">`;sideElement.innerHTML="Goali jumped to right side of post"}
    if (choice==='middle'){
    imageElement.innerHTML = `<img src="https://www.hindustantimes.com/ht-img/img/2023/08/29/1600x900/G_1688254967908_1693334292384.jpg" width="300px" height="300px">`;sideElement.innerHTML="Goali stood in the middle of post"}
}
var player1score=document.getElementById('player1scores')
var player2score=document.getElementById('player2scores')
var player1scores=0
var player2scores=0

const goalAudio=new Audio("https://github.com/AbhijithSPilicode/penalty-kick-app/blob/main/20884528_football-commentary-with-goal-scored_by_soundsvisual_preview-%5BAudioTrimmer.com%5D.mp3?raw=true");
const saveAudio=new Audio("https://github.com/AbhijithSPilicode/penalty-kick-app/blob/main/21748073_penalty-missed-soccer-match-with-commentary_by_soundsvisual_preview-%5BAudioTrimmer.com%5D.mp3?raw=true");
function displayResult(user, computer) {
    const resultElement = document.getElementById('result');
    if (user === computer) {
        resultElement.textContent = "It is a wonderful save by the goali";
        player2scores=player2scores+1;
        player2score.textContent=player2scores;
        saveAudio.play()
        popups(player1scores,player2scores)
    } else {
        resultElement.textContent = "It's a Goal!";
        player1scores=player1scores+1;
        player1score.textContent=player1scores;
        goalAudio.play()
        popups(player1scores,player2scores)
    }
}
var popup=document.getElementById('gameOverPopup');
var result=document.getElementById('winner');
var player1finalscore=document.getElementById('player1final');
var player2finalscore=document.getElementById('player2final');
function popups(player1scores,player2scores){
    if (player1scores==5||player2scores==5){

        if(player1scores==5){
            result.textContent="Congrats!You have won🏆 the penalty Shootout";
            player1finalscore.textContent=player1scores;
            player2finalscore.textContent=player2scores;
            popup.style.display='block';
        }
        if(player2scores==5){
            result.textContent="Better Luck next time😔!You lost the match"
            player1finalscore.textContent=player1scores;
            player2finalscore.textContent=player2scores;
            popup.style.display='block';
        }
    }
}

var resetButton=document.getElementById('restart')
function resetGame(){
window.location.reload()
}
resetButton.addEventListener("click",function(){
resetGame()    
})
