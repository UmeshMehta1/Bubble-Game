

var timer = 3;
var score = 0
var hitrn=0;
function getBubble() {
var bub="";
for (var i = 1;i<=244; i++) {
    bub += `<div id="bubble">${Math.floor(Math.random()*10)}</div>`;

}
document.querySelector(".pbtm").innerHTML= bub;
}

let timerInt = setInterval(()=>{
    if(timer>0){
        timer --
        document.querySelector("#timeTravell").textContent= timer
    }
    else{
        clearInterval(timerInt)
        document.querySelector(".pbtm").innerHTML=`<h1>Game Over</h1>`
    }

}, 1000)

function getNewHit(){

    hitrn = Math.floor(Math.random()*10)

    document.querySelector("#hitVal").textContent=hitrn
}

function increseScore(){
score += 10
document.querySelector("#scoreVal").textContent = score;
}

document.querySelector(".pbtm").addEventListener("click", (e)=>{
var clickedNum = Number(e.target.textContent)
if(clickedNum===hitrn){
    getBubble()
    getNewHit()
    increseScore()

}
})

getBubble()
getNewHit()
increseScore()


