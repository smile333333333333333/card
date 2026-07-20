// =====================================
// H.E.E. SECURITY CHECK
// =====================================

const playButton = document.getElementById("playGame");
const openPackButton = document.getElementById("openPack");

const miniGame = document.getElementById("miniGame");
const gameText = document.getElementById("gameText");
const packStatus = document.getElementById("packStatus");

const targets = [
    document.getElementById("target1"),
    document.getElementById("target2"),
    document.getElementById("target3")
];

let packTickets = 0;
let targetsHit = 0;
let timer;

// =====================================

openPackButton.disabled = true;

// =====================================

playButton.addEventListener("click", startGame);

// =====================================

function startGame(){

    if(packTickets > 0){

        gameText.textContent =
        "You already have a pack waiting.";

        return;

    }

    miniGame.style.display = "block";

    targetsHit = 0;

    gameText.textContent =
    "Click every smile!";

    targets.forEach(target=>{

        target.style.display = "block";

        moveTarget(target);

    });

    timer = setTimeout(loseGame,5000);

}

// =====================================

function moveTarget(target){

    target.style.left =
    Math.random()*520 + "px";

    target.style.top =
    Math.random()*220 + "px";

}

// =====================================

targets.forEach(target=>{

    target.addEventListener("click",function(){

        if(target.style.display=="none")
            return;

        target.style.display="none";

        targetsHit++;

        if(targetsHit==3){

            clearTimeout(timer);

            winGame();

        }

    });

});

// =====================================

function winGame(){

    packTickets = 1;

    openPackButton.disabled = false;

    gameText.textContent =
    "Security Check Passed!";

    packStatus.textContent =
    "You earned one pack.";

}

// =====================================

function loseGame(){

    targets.forEach(target=>{

        target.style.display="none";

    });

    gameText.textContent =
    "Security Check Failed. Try again.";

}

// =====================================

openPackButton.addEventListener("click",function(){

    if(packTickets<=0){

        alert("Complete the Security Check first.");

        return;

    }

    packTickets--;

    openPackButton.disabled = true;

    packStatus.textContent =
    "Complete another Security Check for another pack.";

    openPack();

});
