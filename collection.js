// ======================================
// H.E.E. COLLECTION SYSTEM
// ======================================

// Merge every rarity into one big card list

const cards = [
    ...commonCards,
    ...uncommonCards,
    ...rareCards,
    ...epicCards,
    ...legendaryCards,
    ...impossibleCards
];

// ======================================

const packArea = document.getElementById("packCards");
const collectionArea = document.getElementById("collection");
const openButton = document.getElementById("openPack");

// ======================================

let unlocked = ["Factory Worker"];

// ======================================

function hasCard(name){
    return unlocked.includes(name);
}

function unlockCard(name){

    if(!hasCard(name)){
        unlocked.push(name);
        return true;
    }

    return false;
}

// ======================================
// Rarity Chances
// ======================================

function randomCard(){

    const roll = Math.random()*100;

    let pool;

    if(roll < 60){

        pool = commonCards;

    }else if(roll < 82){

        pool = uncommonCards;

    }else if(roll < 94){

        pool = rareCards;

    }else if(roll < 98){

        pool = epicCards;

    }else if(roll < 99.8){

        pool = legendaryCards;

    }else{

        pool = impossibleCards;

    }

    return pool[
        Math.floor(
            Math.random()*pool.length
        )
    ];

}

// ======================================

function refreshCollection(){

    collectionArea.innerHTML="";

    cards.forEach(card=>{

        const div=document.createElement("div");

        div.className="card";

        if(hasCard(card.name)){

            div.innerHTML=`

            <h3>${card.name}</h3>

            <b>${card.rarity}</b>

            <hr>

            ${card.description}

            `;

        }

        else{

            div.innerHTML=`

            <h3>?????</h3>

            <b>${card.rarity}</b>

            <hr>

            Locked

            `;

        }

        collectionArea.appendChild(div);

    });

}

// ======================================

function refreshDropdowns(){

    fighter1.innerHTML =
    '<option value="">Choose Card</option>';

    fighter2.innerHTML =
    '<option value="">Choose Card</option>';

    cards.forEach(card=>{

        if(hasCard(card.name)){

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

// ======================================

function openPack(){

    packArea.innerHTML="";

    for(let i=0;i<5;i++){

        const card=randomCard();

        const isNew=unlockCard(card.name);

        const div=document.createElement("div");

        div.className="card";

        div.innerHTML=`

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

        <hr>

        <b style="color:${isNew ? "lime" : "gold"}">

        ${isNew ? "NEW CARD!" : "Duplicate"}

        </b>

        `;

        packArea.appendChild(div);

    }

    refreshCollection();

    refreshDropdowns();

}

// ======================================

refreshCollection();
