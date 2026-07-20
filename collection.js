// =====================================
// H.E.E. COLLECTION SYSTEM
// =====================================

// Combine every rarity into one list

const cards = [

    ...commonCards,
    ...uncommonCards,
    ...rareCards,
    ...epicCards,
    ...legendaryCards,
    ...impossibleCards

];

// ----------------------------

const packButton = document.getElementById("openPack");
const packArea = document.getElementById("packCards");
const collectionArea = document.getElementById("collection");
const packStatus = document.getElementById("packStatus");

// ----------------------------

let unlocked = [];

// Everyone starts with Factory Worker

unlockCard("Factory Worker");

// =====================================

function unlockCard(name){

    if(!unlocked.includes(name))
        unlocked.push(name);

}

// =====================================

function hasCard(name){

    return unlocked.includes(name);

}

// =====================================
// Pick rarity first
// =====================================

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
        Math.floor(Math.random()*pool.length)
    ];

}

// =====================================
// Collection
// =====================================

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

            Unknown

            `;

        }

        collectionArea.appendChild(div);

    });

}

// =====================================
// Pack Opening
// =====================================

function openPack(){

    packArea.innerHTML="";

    for(let i=0;i<5;i++){

        const card=randomCard();

        const already=hasCard(card.name);

        unlockCard(card.name);

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

        <b style="color:${already?"gold":"lime"}">

        ${already?"Duplicate":"NEW CARD!"}

        </b>

        `;

        packArea.appendChild(div);

    }

    refreshCollection();

    refreshDropdowns();

}

// =====================================

refreshCollection();
