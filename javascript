// Mainīgo definēšana
const ticketPrice = 7;
const calculateBtn = document.getElementById('calculate-btn');
const resultDisplay = document.getElementById('result-display');

// Funkcija aprēķinam
function calculateTotal() {
    const countInput = document.getElementById('ticket-count');
    const count = parseInt(countInput.value);

    // Ievades datu pārbaude (Papildu uzdevums)
    if (isNaN(count) || count <= 0) {
        resultDisplay.innerText = "Lūdzu, ievadiet derīgu biļešu skaitu!";
        resultDisplay.style.color = "red";
        return;
    }

    let total = count * ticketPrice;
    let message = "";

    // Atlaides loģika (Papildu uzdevums: ja skaits >= 5)
    if (count >= 5) {
        total = total * 0.8; // 20% atlaide
        message = `Apsveicam! Saņemta 20% atlaide. Kopā: ${total.toFixed(2)} EUR`;
        resultDisplay.style.color = "green";
    } else {
        message = `Kopā apmaksai: ${total.toFixed(2)} EUR`;
        resultDisplay.style.color = "black";
    }

    // Dinamiska rezultāta attēlošana
    resultDisplay.innerText = message;
}

// Notikumu klausītājs
calculateBtn.addEventListener('click', calculateTotal);
