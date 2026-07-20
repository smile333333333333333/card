// ======================================
// H.E.E. BATTLE SYSTEM
// ======================================

const fighter1 = document.getElementById("fighter1");
const fighter2 = document.getElementById("fighter2");

const stats1 = document.getElementById("stats1");
const stats2 = document.getElementById("stats2");

const result = document.getElementById("result");
const fightButton = document.getElementById("fightButton");

// ======================================
// Refresh Dropdowns
// ======================================

function refreshDropdowns(){

    fighter1.innerHTML =
    '<option value="">Choose Card</option>';

    fighter2.innerHTML =
    '<option value="">Choose Card</option>';

    cards.forEach(card=>{

        if(unlocked.includes(card.name)){

            fighter1.innerHTML +=
            `<option value="${card.name}">
                ${card.name}
            </option>`;

            fighter2.innerHTML +=
            `<option value="${card.name}">
                ${card.name}
            </option>`;

        }

    });

}

refreshDropdowns();

// ======================================
// Show Card Stats
// ======================================

function showStats(select, output){

    const name = select.value;

    const card = cards.find(c => c.name === name);

    if(!card){

        output.innerHTML = "No card selected.";

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

fighter1.addEventListener("change",()=>{

    showStats(fighter1,stats1);

});

fighter2.addEventListener("change",()=>{

    showStats(fighter2,stats2);

});

// ======================================
// Battle
// ======================================

fightButton.addEventListener("click",()=>{

    const card1 =
    cards.find(c=>c.name===fighter1.value);

    const card2 =
    cards.find(c=>c.name===fighter2.value);

    if(!card1 || !card2){

        result.innerHTML =
        "Choose two fighters first.";

        return;

    }

    const score1 =
        card1.strength +
        card1.intelligence +
        card1.stability +
        card1.luck +
        card1.speed +
        Math.floor(Math.random()*40);

    const score2 =
        card2.strength +
        card2.intelligence +
        card2.stability +
        card2.luck +
        card2.speed +
        Math.floor(Math.random()*40);

    if(score1 > score2){

        result.innerHTML =
        `<h2>${card1.name} Wins!</h2>`;

    }
    else if(score2 > score1){

        result.innerHTML =
        `<h2>${card2.name} Wins!</h2>`;

    }
    else{

        result.innerHTML =
        `<h2>Draw!</h2>`;

    }

});
