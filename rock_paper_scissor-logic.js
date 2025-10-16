// Image elements for choices
const computerRockImg = document.getElementById("computer-choice1");
const computerPaperImg = document.getElementById("computer-choice2");
const computerScissorImg = document.getElementById("computer-choice3");

const userRockImg = document.getElementById("user-choice1");
const userPaperImg = document.getElementById("user-choice2");
const userScissorImg = document.getElementById("user-choice3");

// Choice buttons
const rockChoice = document.getElementById("rock");
const paperChoice = document.getElementById("paper");
const scissorsChoice = document.getElementById("scissors");
const allChoiceButtons = document.querySelectorAll(".choice");

// Score and message
const userScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");
const transformUserScore = document.querySelector(".transformScoreUser");
const transformCompScore = document.querySelector(".transformScoreComp");
const actionMessageEl = document.getElementById("action-message");
const resetBtn = document.getElementById("reset");
const scoreElementsUser = transformUserScore.querySelectorAll(".score");
const scoreElementsComp = transformCompScore.querySelectorAll(".score");


let scoreIncrementComp = 0;
let scoreIncrementUser = 0;
transformUserScore.style.transform = "translateY(0px)";
transformCompScore.style.transform = "translateY(0px)";


// Event listeners for choice buttons
// Rock Choice button 

rockChoice.addEventListener("click", () => {
    if ((scoreIncrementComp !== 10) || (scoreIncrementUser !== 10)) {
        userRockImg.style.zIndex = 1000;
        userPaperImg.style.zIndex = -1;
        userScissorImg.style.zIndex = -1;
        newRound();
    }
});
rockChoice.addEventListener('mouseenter', () => {
    rockChoice.classList.add('choice-hover');
});

rockChoice.addEventListener('mouseleave', () => {
    rockChoice.classList.remove('choice-hover');
});
rockChoice.addEventListener('mousedown', () => {
    rockChoice.style.transform = "scale(0.8)";
});

rockChoice.addEventListener('mouseup', () => {
    rockChoice.style.transform = "";
});

// Paper Choice button
paperChoice.addEventListener("click", () => {
    if ((scoreIncrementComp) !== 10 || (scoreIncrementUser !== 10)) {
        userPaperImg.style.zIndex = 1000;
        userRockImg.style.zIndex = -1;
        userScissorImg.style.zIndex = -1;
        newRound();
    }
})
paperChoice.addEventListener('mouseenter', () => {
    paperChoice.classList.add('choice-hover');
});

paperChoice.addEventListener('mouseleave', () => {
    paperChoice.classList.remove('choice-hover');
});
paperChoice.addEventListener('mousedown', () => {
    paperChoice.style.transform = "scale(0.8)";
});

paperChoice.addEventListener('mouseup', () => {
    paperChoice.style.transform = "";
});

// Scissors Choice button
scissorsChoice.addEventListener("click", () => {
    if ((scoreIncrementComp) !== 10 || (scoreIncrementUser !== 10)) {
        userScissorImg.style.zIndex = 1000;
        userRockImg.style.zIndex = -1;
        userPaperImg.style.zIndex = -1;
        newRound();
    }
})
scissorsChoice.addEventListener('mouseenter', () => {
    scissorsChoice.classList.add('choice-hover');
});

scissorsChoice.addEventListener('mouseleave', () => {
    scissorsChoice.classList.remove('choice-hover');
});
scissorsChoice.addEventListener('mousedown', () => {
    scissorsChoice.style.transform = "scale(0.8)";
});

scissorsChoice.addEventListener('mouseup', () => {
    scissorsChoice.style.transform = "";
});

function newRound() {
    const randomNum = Math.floor(Math.random() * 3) + 1;

    if (randomNum === 1) {
        computerRockImg.style.zIndex = 1000;
        computerPaperImg.style.zIndex = -1;
        computerScissorImg.style.zIndex = -1;
    }

    if (randomNum === 2) {
        computerPaperImg.style.zIndex = 1000;
        computerRockImg.style.zIndex = -1;
        computerScissorImg.style.zIndex = -1;
    }

    if (randomNum === 3) {
        computerScissorImg.style.zIndex = 1000;
        computerRockImg.style.zIndex = -1;
        computerPaperImg.style.zIndex = -1;
    }

    scoreEvaluater(randomNum);
}

function scoreEvaluater(randomNum) {

    if (randomNum === 1 && userRockImg.style.zIndex === "1000") {
        actionMessageEl.innerText = "It's a draw! Both chose Rock.";
    }

    else if (randomNum === 2 && userPaperImg.style.zIndex === "1000") {
        actionMessageEl.innerText = "It's a draw! Both chose Paper.";
    }

    else if (randomNum === 3 && userScissorImg.style.zIndex === "1000") {
        actionMessageEl.innerText = "It's a draw! Both chose Scissors.";
    }

    // User win cases 
    else if (randomNum === 1 && userPaperImg.style.zIndex === "1000") {
        transformUserScore.style.transform = `translateY(-${scoreIncrementUser * 60}px)`;
        actionMessageEl.innerText = "You win! Paper beats Rock.";

        scoreElementsUser[scoreIncrementUser - 1].classList.add("ScoreAnimation");

        scoreIncrementUser++;
    }

    else if (randomNum === 2 && userRockImg.style.zIndex === "1000") {
        transformUserScore.style.transform = `translateY(-${scoreIncrementUser * 60}px)`;
        actionMessageEl.innerText = "You win! Rock beats Paper.";

        scoreElementsUser[scoreIncrementUser - 1].classList.add("ScoreAnimation");

        scoreIncrementUser++;
    }

    else if (randomNum === 3 && userScissorImg.style.zIndex === "1000") {
        transformUserScore.style.transform = `translateY(-${scoreIncrementUser * 60}px)`;
        actionMessageEl.innerText = "You win! Scissors beats Paper.";

        scoreElementsUser[scoreIncrementUser - 1].classList.add("ScoreAnimation");

        scoreIncrementUser++;
    }

    // Computer win cases 
    else if (randomNum === 1 && userScissorImg.style.zIndex === "1000") {
        transformCompScore.style.transform = `translateY(-${scoreIncrementComp * 60}px)`;
        actionMessageEl.innerText = "You lose! Rock beats Scissors.";

        scoreElementsComp[scoreIncrementComp - 1].classList.add("ScoreAnimation");

        scoreIncrementComp++;
    }
    else if (randomNum === 2 && userRockImg.style.zIndex === "1000") {
        transformCompScore.style.transform = `translateY(-${scoreIncrementComp * 60}px)`;
        actionMessageEl.innerText = "You lose! Paper beats Rock.";


        scoreElementsComp[scoreIncrementComp - 1].classList.add("ScoreAnimation");

        scoreIncrementComp++;
    }
    else if (randomNum === 3 && userPaperImg.style.zIndex === "1000") {
        transformCompScore.style.transform = `translateY(-${scoreIncrementComp * 60}px)`;
        actionMessageEl.innerText = "You lose! Scissors beats Paper.";

        scoreElementsComp[scoreIncrementComp - 1].classList.add("ScoreAnimation");

        scoreIncrementComp++;
    }
}

resetBtn.addEventListener("click", () => {
    userRockImg.style.zIndex = -1;
    userPaperImg.style.zIndex = -1;
    userScissorImg.style.zIndex = -1;
    computerRockImg.style.zIndex = -1;
    computerPaperImg.style.zIndex = -1;
    computerScissorImg.style.zIndex = -1;
    actionMessageEl.textContent = "Make your move!";
    transformUserScore.style.transform = "translateY(0px)";
    transformCompScore.style.transform = "translateY(0px)";
    scoreIncrementComp = 0;
    scoreIncrementUser = 0;
})















// let userScore = 0;
// let computerScore = 0;

// function hideAllDisplayedImages() {
//     // Hide user images
//     userRockImg.hidden = true;
//     userPaperImg.hidden = true;
//     userScissorImg.hidden = true;
//     // Hide computer images
//     computerRockImg.hidden = true;
//     computerPaperImg.hidden = true;
//     computerScissorImg.hidden = true;
// }

// function showUserChoice(choice) {
//     if (choice === "rock") userRockImg.hidden = false;
//     if (choice === "paper") userPaperImg.hidden = false;
//     if (choice === "scissors") userScissorImg.hidden = false;
// }

// function showComputerChoice(choice) {
//     if (choice === "rock") computerRockImg.hidden = false;
//     if (choice === "paper") computerPaperImg.hidden = false;
//     if (choice === "scissors") computerScissorImg.hidden = false;
// }

// function getComputerChoice() {
//     const options = ["rock", "paper", "scissors"];
//     const index = Math.floor(Math.random() * options.length);
//     return options[index];
// }

// function decideWinner(user, computer) {
//     if (user === computer) return "draw";
//     if (
//         (user === "rock" && computer === "scissors") ||
//         (user === "paper" && computer === "rock") ||
//         (user === "scissors" && computer === "paper")
//     ) {
//         return "user";
//     }
//     return "computer";
// }

// function updateScores() {
//     // Show only the current ScoreAnimation number within the vertical list
//     // Assumes the ScoreAnimation containers have children 0..10; we scroll to the correct item
//     const clamp = (n) => Math.max(0, Math.min(10, n));
//     const userIndex = clamp(userScore);
//     const compIndex = clamp(computerScore);

//     [...userScoreEl.children].forEach((el, idx) => {
//         el.style.transform = `translateY(${(0 - userIndex) * 60}px)`;
//     });
//     [...computerScoreEl.children].forEach((el, idx) => {
//         el.style.transform = `translateY(${(0 - compIndex) * 60}px)`;
//     });
// }

// function playRound(userSelection) {
//     const computerSelection = getComputerChoice();

//     hideAllDisplayedImages();
//     showUserChoice(userSelection);
//     showComputerChoice(computerSelection);

//     const result = decideWinner(userSelection, computerSelection);
//     if (result === "user") {
//         userScore += 1;
//         actionMessageEl.textContent = `You win! ${capitalize(userSelection)} beats ${capitalize(computerSelection)}.`;
//     } else if (result === "computer") {
//         computerScore += 1;
//         actionMessageEl.textContent = `You lose! ${capitalize(computerSelection)} beats ${capitalize(userSelection)}.`;
//     } else {
//         actionMessageEl.textContent = "It's a draw!";
//     }

//     updateScores();
// }

// function capitalize(s) {
//     return s.charAt(0).toUpperCase() + s.slice(1);
// }

// allChoiceButtons.forEach((btn) => {
//     btn.addEventListener("click", () => {
//         const id = btn.id; // "rock" | "paper" | "scissors"
//         playRound(id);
//     });
// });

// resetBtn.addEventListener("click", () => {
//     userScore = 0;
//     computerScore = 0;
//     hideAllDisplayedImages();
//     actionMessageEl.textContent = "Make your move!";
//     updateScores();
// });

// // Initialize state on load
// hideAllDisplayedImages();
// updateScores();