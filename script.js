
var timer = 60;
var score = 0;
var hit;

function makebubble(){
    var clutter = "";

for(var i = 1; i<=360; i++){
    var rn = Math.floor(Math.random()*10)
    clutter = clutter + `<div id="bubble">${rn}</div>`
}

var bubble = document.querySelector("#game");
bubble.innerHTML = clutter;

}

function timeout(){
    var interval = setInterval(function(){
        if(timer > 0){
            timer--;
             var time = document.querySelector("#Interval")
             time.textContent = timer
            }
            else{
                clearInterval(interval);
                document.querySelector("#game").innerHTML = `<h1>GAME OVER</h1> <br>
                 <h1>Score = ${score} </h1>`;
            }
        },1000)
}

function hitscore(){
    hit = Math.floor(Math.random()*10);
    var point = document.querySelector("#Hitval");
    point.textContent = hit;
} 

function increaseScore() {
    score = score + 10;
    numb = document.querySelector("#scoreval");
    numb.textContent = score;
}
document.querySelector("#game").addEventListener("click",function(deatils){
    var clickedNumber = (Number(deatils.target.textContent));
    if(hit == clickedNumber){
        increaseScore();
        hitscore();
        makebubble();
    }
})
makebubble();
timeout();
hitscore();