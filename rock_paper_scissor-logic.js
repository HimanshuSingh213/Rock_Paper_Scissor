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
const actionMessageShowUp = document.getElementById("action-message");
const resetBtn = document.getElementById("reset");
const youWon = document.querySelector(".youWon");
const youLost = document.querySelector(".youLost");
const newGame = document.querySelectorAll("#newGame");
// const scoreElementsUser = transformUserScore.querySelectorAll(".score");
// const scoreElementsComp = transformCompScore.querySelectorAll(".score");


let scoreIncrementComp = 0;
let scoreIncrementUser = 0;
transformUserScore.style.transform = "translateY(0px)";
transformCompScore.style.transform = "translateY(0px)";


// Event listeners for choice buttons
// Rock Choice button 
rockChoice.addEventListener("click", () => {
    if ((scoreIncrementComp <= 10) && (scoreIncrementUser <= 10)) {
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
    if ((scoreIncrementComp <= 10) && (scoreIncrementUser <= 10)) {
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
    if ((scoreIncrementComp <= 10) && (scoreIncrementUser <= 10)) {
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

// New Round Function
function newRound() {
    const randomNum = Math.floor(Math.random() * 3) + 1;

    if (randomNum === 1 && scoreIncrementComp <= 10) {
        computerRockImg.style.zIndex = 1000;
        computerPaperImg.style.zIndex = -1;
        computerScissorImg.style.zIndex = -1;
    }

    if (randomNum === 2 && scoreIncrementComp <= 10) {
        computerPaperImg.style.zIndex = 1000;
        computerRockImg.style.zIndex = -1;
        computerScissorImg.style.zIndex = -1;
    }

    if (randomNum === 3 && scoreIncrementComp <= 10) {
        computerScissorImg.style.zIndex = 1000;
        computerRockImg.style.zIndex = -1;
        computerPaperImg.style.zIndex = -1;
    }

    scoreEvaluater(randomNum);
}

// Function for Evaluating Score
function scoreEvaluater(randomNum) {

    if (randomNum === 1 && userRockImg.style.zIndex === "1000") {
        actionMessageShowUp.innerText = "It's a draw! Both chose Rock.";
    }

    else if (randomNum === 2 && userPaperImg.style.zIndex === "1000") {
        actionMessageShowUp.innerText = "It's a draw! Both chose Paper.";
    }

    else if (randomNum === 3 && userScissorImg.style.zIndex === "1000") {
        actionMessageShowUp.innerText = "It's a draw! Both chose Scissors.";
    }

    // User win cases 
    else if (randomNum === 1 && userPaperImg.style.zIndex === "1000") {
        actionMessageShowUp.innerText = "You win! Paper beats Rock.";
        
        scoreIncrementUser++;
        transformUserScore.style.transform = `translateY(-${scoreIncrementUser * 60}px)`;
        // scoreElementsUser[scoreIncrementUser - 1].classList.add("ScoreAnimation");

    }

    else if (randomNum === 2 && userRockImg.style.zIndex === "1000") {
        actionMessageShowUp.innerText = "You win! Rock beats Paper.";
        
        scoreIncrementUser++;
        transformUserScore.style.transform = `translateY(-${scoreIncrementUser * 60}px)`;
        // scoreElementsUser[scoreIncrementUser - 1].classList.add("ScoreAnimation");

    }

    else if (randomNum === 3 && userScissorImg.style.zIndex === "1000") {
        actionMessageShowUp.innerText = "You win! Scissors beats Paper.";
        
        scoreIncrementUser++;
        transformUserScore.style.transform = `translateY(-${scoreIncrementUser * 60}px)`;
        // scoreElementsUser[scoreIncrementUser - 1].classList.add("ScoreAnimation");

    }

    // Computer win cases 
    else if (randomNum === 1 && userScissorImg.style.zIndex === "1000") {
        actionMessageShowUp.innerText = "You lose! Rock beats Scissors.";
        
        scoreIncrementComp++;
        transformCompScore.style.transform = `translateY(-${scoreIncrementComp * 60}px)`;
        // scoreElementsComp[scoreIncrementComp - 1].classList.add("ScoreAnimation");

    }
    else if (randomNum === 2 && userRockImg.style.zIndex === "1000") {
        actionMessageShowUp.innerText = "You lose! Paper beats Rock.";
        
        
        scoreIncrementComp++;
        transformCompScore.style.transform = `translateY(-${scoreIncrementComp * 60}px)`;
        // scoreElementsComp[scoreIncrementComp - 1].classList.add("ScoreAnimation");

    }
    else if (randomNum === 3 && userPaperImg.style.zIndex === "1000") {
        actionMessageShowUp.innerText = "You lose! Scissors beats Paper.";
        
        scoreIncrementComp++;
        transformCompScore.style.transform = `translateY(-${scoreIncrementComp * 60}px)`;
        // scoreElementsComp[scoreIncrementComp - 1].classList.add("ScoreAnimation");

    }


    if(scoreIncrementComp === 10){
        setTimeout(() => {
            youLost.hidden = false;
            
        }, 600);
    }
    if(scoreIncrementUser === 10){
        setTimeout(() => {
            youWon.hidden = false;
            
        }, 600);
    }
}

resetBtn.addEventListener("click", () => {
    userRockImg.style.zIndex = -1;
    userPaperImg.style.zIndex = -1;
    userScissorImg.style.zIndex = -1;
    computerRockImg.style.zIndex = -1;
    computerPaperImg.style.zIndex = -1;
    computerScissorImg.style.zIndex = -1;
    actionMessageShowUp.textContent = "Make your move!";
    transformUserScore.style.transform = "translateY(0px)";
    transformCompScore.style.transform = "translateY(0px)";
    scoreIncrementComp = 0;
    scoreIncrementUser = 0;
});

function reset() {
    userRockImg.style.zIndex = -1;
    userPaperImg.style.zIndex = -1;
    userScissorImg.style.zIndex = -1;
    computerRockImg.style.zIndex = -1;
    computerPaperImg.style.zIndex = -1;
    computerScissorImg.style.zIndex = -1;
    actionMessageShowUp.textContent = "Make your move!";
    transformUserScore.style.transform = "translateY(0px)";
    transformCompScore.style.transform = "translateY(0px)";
    scoreIncrementComp = 0;
    scoreIncrementUser = 0;
}

newGame.forEach(button => {
    button.addEventListener("click", () => {
        youWon.hidden = true;
        youLost.hidden = true;
        reset();
    });
});