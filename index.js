let scoreH=document.getElementById("score-h")
let scoreOfH=0
let scoreG=document.getElementById("score-g")
let scoreOfG=0

function add1H(){
    scoreOfH+=1
    scoreH.textContent=scoreOfH
}
function add2H(){
    scoreOfH+=2
   scoreH.textContent=scoreOfH
}
function add3H(){
    scoreOfH+=3
    scoreH.textContent=scoreOfH
}

function add1G(){
    scoreOfG+=1
    scoreG.textContent=scoreOfG
}
function add2G(){
   scoreOfG+=2
   scoreG.textContent=scoreOfG
}
function add3G(){
    scoreOfG+=3
    scoreG.textContent=scoreOfG
}

function newgame(){
    scoreOfG=0
    scoreOfH=0
    scoreG.textContent=0
    scoreH.textContent=0
}