const words = [
    "APFEL",
    "BANANE",
    "SCHULE",
    "COMPUTER",
    "GARTEN",
    "FENSTER",
    "BLUME",
    "SONNE"
];

const letters = [
    "A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U",
    "V", "W", "X", "Y", "Z"
];

let selectedWord = "";
let foundLetters = [];

function startGame() {
    const randomIndex = Math.floor(Math.random() * words.length);
    selectedWord = words[randomIndex];
    foundLetters = [];

    renderWord();
    renderKeyword();
}

function renderWord() {
    let html = "";

    for (let i = 0; i < selectedWord.length; i++) {
        if (foundLetters.includes(selectedWord[i])) {
            html += `<span>${selectedWord[i]}</span>`;
        } else {
            html += "<span>_</span>";
        }
    }

    document.getElementById("word").innerHTML = html;
}

function renderKeyword() {
    let html = "";

    for (let i = 0; i < letters.length; i++) {
        html += letterTemplate(i);
    }

    document.getElementById("keyword").innerHTML = html;
}

function letterTemplate(indexLetter) {
    return `
        <button class="letter-button"
            onclick="showItem('${letters[indexLetter]}')">
            ${letters[indexLetter]}
        </button>
    `;
}

function showItem(item) {
    if (selectedWord.includes(item)) {
        if (!foundLetters.includes(item)) {
            foundLetters.push(item);
        }
        console.log("Treffer");
    } else {
        console.log("Kein Treffer");
    }

    renderWord();
    console.log(foundLetters);
}

startGame();