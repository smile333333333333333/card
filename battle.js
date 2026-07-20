// ======================================
// H.E.E. BATTLE SYSTEM
// ======================================

const fighter1 = document.getElementById("fighter1");
const fighter2 = document.getElementById("fighter2");

const stats1 = document.getElementById("stats1");
const stats2 = document.getElementById("stats2");

const fightButton = document.getElementById("fightButton");
const result = document.getElementById("result");

// ======================================

function showStats(select, output){

    const name = select.value;

    if(name === ""){

        output.innerHTML = "No card selected.";

        return;

    }

    const card = cards.find(c => c.name === name);

    if(!card){

        output.innerHTML = "Card not found.";

        return;

    }

    output.innerHTML = `

    <h3>${card.name}</h3>

    <b>${card.rarity}</b>

    <hr>

    Strength: ${card.strength}<br>
    Intelligence: ${card.intelligence}<br>
    Stability: ${card.stability}<br>
    Luck: ${card.luck}<br>
    Speed: ${card.speed}

    <hr>

    ${card.description}

    `;

}

// ======================================

fighter1.addEventListener("change", function(){

    showStats(fighter1, stats1);

});

fighter2.addEventListener("change", function(){

    showStats(fighter2, stats2);

});

// ======================================

fightButton.addEventListener("click", function(){

    if(fighter1.value === "" || fighter2.value === ""){

        result.innerHTML =
        "<b>Select two cards first.</b>";

        return;

    }

    const card1 =
    cards.find(c => c.name === fighter1.value);

    const card2 =
    cards.find(c => c.name === fighter2.value);

    let score1 =
        card1.strength +
        card1.intelligence +
        card1.stability +
        card1.luck +
        card1.speed;

    let score2 =
        card2.strength +
        card2.intelligence +
        card2.stability +
        card2.luck +
        card2.speed;

    // Random bonus

    score1 += Math.floor(Math.random() * 50);
    score2 += Math.floor(Math.random() * 50);

    if(score1 > score2){

        result.innerHTML = `

        <h2>${card1.name} Wins!</h2>

        ${score1} - ${score2}

        `;

    }
    else if(score2 > score1){

        result.innerHTML = `

        <h2>${card2.name} Wins!</h2>

        ${score2} - ${score1}

        `;

    }
    else{

        result.innerHTML = `

        <h2>Draw!</h2>

        ${score1} - ${score2}

        `;

    }

});

// ======================================

refreshDropdowns();
showStats(fighter1, stats1);
showStats(fighter2, stats2);
