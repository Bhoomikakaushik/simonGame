let gameseq =[];
let userseq =[];

let btns = [ "yellow", "red","green","purple"]

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },200);

}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);

}


function levelUp(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    
    let randBtn = document.querySelector(`.${randColor}`);

    gameseq.push(randColor);
    gameFlash(randBtn);
}
function checkAns(index){
    if(userseq[index]==gameseq[index]){
        //console.log("same value");
        if(userseq.length == gameseq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game Over! your score was <u><b>${level} </b></u> <br>press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function btnPress(){
    console.log(this);
    let btn = this;//shows konsa wala btn press kiya humne
    userFlash(btn);

    userColor= btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset (){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}