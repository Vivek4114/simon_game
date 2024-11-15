let gameseq = [];
let userseq = [];
let btns = ["yellow","red", "purple", "green"];

let started = false;
let level = 0;




let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
     if(started == false){
        console.log("game Started");
        started = true;
        levelup();
     }
});

function gameflash(btn){
     btn.classList.add("flash");
     setTimeout(function(){
          btn.classList.remove("flash");
     },250);

}

function useflash(btn){
     btn.classList.add("userflash");
     setTimeout(function(){
          btn.classList.remove("userflash");
     },250);

}


function levelup(){
     userseq = [];
     level++;
    h2.innerText = `Level ${level}`;
       
    let randInx = Math.floor(Math.random()*4);
    let randcolr = btns[randInx];
    let randbtn = document.querySelector(`.${randcolr}`); 
   
//     console.log(randInx);
//     console.log(randcolr);
//     console.log(randbtn);

     gameseq.push(randcolr);
     console.log(gameseq);
    gameflash(randbtn);

}


function checkAns(idx){
        
     if(userseq[idx] === gameseq[idx]){
          if(userseq.length == gameseq.length){
              setTimeout(levelup, 1000);
          }
     } else {
          h2.innerHTML  = `Game Over.!  your score was <b>${level}</b> </br> Press Any key to start Game`;
          document.querySelector("body").style.backgroundColor = "red";
          setTimeout(function () {
          document.querySelector("body").style.backgroundColor = "white";   
          }, 150);
          reset ();
          checkhs();

     }
}

function btnpress(){
     let btn = this;
     useflash(btn);

     usercolor = btn.getAttribute("id");
     console.log(usercolor);
     userseq.push(usercolor);

     checkAns(userseq.length - 1);    

}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
     btn.addEventListener("click", btnpress);
}

function reset(){
     started = false;
     gameseq = [];
     userseq = [];
     level = 0;
}

let hightscore = [];
let hs = document.querySelector("p");

function checkhs(){
     if(level >= userseq.length){
          hs.innerText = `your  hight score is ${level}`;
          }
}

