let playerName = prompt("Введіть ваше ім’я:");
while (!playerName || playerName.trim() === "") {
    playerName = prompt("Ім’я не може бути порожнім! Введіть ще раз:");
}

document.getElementById("playerName").textContent = `Гравець: ${playerName}`;

let playerScore = 0;
let computerScore = 0;

const playBtn = document.getElementById("playBtn");
const playerScoreEl = document.getElementById("playerScore");
const computerScoreEl = document.getElementById("computerScore");
const resultEl = document.getElementById("result");

playBtn.addEventListener("click", () => {
    const playerNumber = Math.floor(Math.random() * 10) + 1;
    const computerNumber = Math.floor(Math.random() * 10) + 1;

    if (playerNumber > computerNumber) {
        playerScore++;
        resultEl.textContent = `${playerName} виграв раунд! (${playerNumber} > ${computerNumber})`;
    } else if (computerNumber > playerNumber) {
        computerScore++;
        resultEl.textContent = `Комп’ютер виграв раунд! (${computerNumber} > ${playerNumber})`;
    } else {
        resultEl.textContent = `Нічия! (${playerNumber} = ${computerNumber})`;
    }

    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;

    if (playerScore === 3 || computerScore === 3) {
        const winner = playerScore === 3 ? playerName : "Комп’ютер";
        alert(`Гру завершено! Переможець: ${winner}`);
        playBtn.disabled = true;
        resultEl.textContent = `Переможець: ${winner}`;
    }
});
