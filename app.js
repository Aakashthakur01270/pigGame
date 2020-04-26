var scores,roundScore,activePlayer,gameActive,lastDice;


initialize();
// document.querySelector("#score-0").textContent=dice;


document.querySelector(".btn-roll").addEventListener("click",function(evennt){
    var roll =new Audio("sounds/MANYDICE.wav");
        roll.play();
    if(gameActive==true){

    
    var dice=Math.floor(Math.random()*6)+1;
    document.querySelector(".dice").style.display="block";
    document.querySelector(".dice").src="images/dice-"+dice+".png";
    if(dice===6&& lastDice===6){
        scores[activePlayer]=0;
        document.querySelector("#score-"+activePlayer).textContent="0";
        nextplayer();
    }
    else if(dice!==1){
        roundScore+=dice;
        document.querySelector("#current-"+activePlayer).textContent=roundScore;
        
    }else{
        nextplayer();
    }
    lastDice=dice;
    }
})

document.querySelector(".btn-hold").addEventListener("click",function(){
    if(gameActive==true){
        var pause =new Audio("sounds/pause1.wav");
        pause.play();
        
    
    scores[activePlayer]+=roundScore;
    
    

    document.querySelector("#score-"+activePlayer).textContent=scores[activePlayer];
    var input=document.querySelector(".final-score").value;
    
    var winningScore;
    if(input){
        winningScore=input;
    }
    else{
        winningScore=100;
    }
    if(scores[activePlayer]>=winningScore){
        var win=new Audio("sounds/win.mp3");
        win.play();
        document.querySelector("#name-"+activePlayer).textContent="WINNER";
        document.querySelector(".dice").style.display="none";
        document.querySelector(".player-"+activePlayer+"-panel").classList.add("winner");
        document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");
        gameActive=false;
    }
    else{
        nextplayer();
    }

}
})


function nextplayer(){
    
    activePlayer===0?activePlayer=1:activePlayer=0;
        roundScore=0;
        // document.querySelector(".player-0-panel").classList.remove("active");
        // document.querySelector(".player-1-panel").classList.add("active");

        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
        
        document.getElementById("current-0").textContent="0";
        document.getElementById("current-1").textContent="0";

        document.querySelector(".dice").style.display="none";
}



document.querySelector(".btn-new").addEventListener("click",function(){
    var newG=new Audio("sounds/wakeup.mp3");
    newG.play();
    initialize();
});
   
function initialize(){
    

    gameActive=true;
    scores=[0,0];
    roundScore=0;
    activePlayer=0;
    
    
            document.getElementById("score-0").textContent="0";
            document.getElementById("score-1").textContent="0";
            document.getElementById("current-0").textContent="0";
            document.getElementById("current-1").textContent="0";
            document.querySelector("#name-0").textContent="Player 1"
            document.querySelector("#name-1").textContent="Player 2"
            document.querySelector(".player-0-panel").classList.remove("winner");
            document.querySelector(".player-1-panel").classList.remove("winner");
            document.querySelector(".player-0-panel").classList.remove("active");
            document.querySelector(".player-0-panel").classList.remove("active");
            document.querySelector(".player-0-panel").classList.add("active");
            // document.querySelector(".final-score").value="0"
            document.querySelector(".dice").style.display="none";
    }

