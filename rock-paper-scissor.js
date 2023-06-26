let computerChoice = "";
let playerChoice = "";
let randomChoice = ["rock", "paper", "scissor"];
let isRunning = true;
let choice = 0; 
let playerPoints = 0;
let computerPoints = 0;
let points = 5;
let gameText = "";

const winnerFound = {
    found: false,

    get getFound()
    {
        return this.found;
    },

    set setFound(value)
    {
        this.found = value;
    }
};

getButtonValue();

function getButtonValue()
{
    const buttonContainer = document.querySelector(".container-button");
    const buttons = Array.from(document.querySelectorAll(".buttons"))


    buttonContainer.addEventListener("click", (e) =>
    {
        if (winnerFound.getFound) 
        {
            buttons.forEach(() => {
                buttons.disabled = true;
            })
        }
        else
        {
            choice = randomChoice[Math.floor(Math.random() * randomChoice.length)];
            const isButton = e.target.nodeName === "BUTTON";
            if(!isButton)
            {
                return;
            }

            playerChoice = e.target.value;
            playRound(choice, playerChoice);
        }

    })
    
}

function playRound(choice, playerChoice)
{
    gameText = document.getElementById("game-text");
    if(choice === playerChoice)
    {
        gameText.textContent = "Equals! No winner";
    }
    else
    {
        if (choice === "rock" && playerChoice === "paper") 
        {
            playerPoints++;
            gameText.textContent = "Player wins! Paper covers rock";    
        }
        else if (choice === "rock" && playerChoice === "scissor") 
        {
            computerPoints++;
            gameText.textContent = "Computer wins! Rock hits scissor";    
        } 
        else if(choice === "paper" && playerChoice === "rock")
        {
            computerPoints++;
            gameText.textContent = "Computer wins! Paper covers rock";
        }
        else if(choice === "paper" && playerChoice === "scissor")
        {
            playerPoints++;
            gameText.textContent = "Player wins! Scissor cuts paper";
        }
        else if(choice === "scissor" && playerChoice === "paper")
        {
            computerPoints++;
            gameText.textContent = "Computer wins! Scissor cuts paper";
        }
        else if(choice === "scissor" && playerChoice === "rock")
        {
            playerPoints++;
            gameText.textContent = "Player wins! Rock hits scissor";
        }
        else 
        {
            gameText.textContent = "Wrong input!";
        }
    }

    updatePoints();
    checkWinner();
}

function updatePoints() 
{
    let playerPointText = document.getElementById("player-points");
    playerPointText.textContent = playerPoints;

    let computerPointText = document.getElementById("computer-points");
    computerPointText.textContent = computerPoints;
}

function checkWinner() 
{
    if (playerPoints >= points || computerPoints >= points) 
    {
        winnerFound.setFound = true;
        clearDOM();
        createResetButtons();
    }
    else
    {
        winnerFound.setFound = false;
    }
}

/*function reset()
{
    playerPoints = 0;
    computerPoints = 0;
    winnerFound.setFound = false;
    gameText.textContent = "Have fun playing!";
}*/

function resetDOM() 
{
    location.reload();
}

function clearDOM() 
{
    let body = document.querySelector("body");

    while (body.hasChildNodes()) 
    {
        body.removeChild(body.firstChild);    
    }
}

function createResetButtons() 
{
    let yesButton = document.createElement("button");
    let noButton = document.createElement("button");   
    let textContainer = document.createElement("div");
    let body = document.querySelector("body");

    textContainer.classList = "reset-button-container";

    body.appendChild(gameText);
    body.appendChild(textContainer);
    
    yesButton.textContent = "Yes";
    noButton.textContent = "No";

    yesButton.classList = "buttons";
    noButton.classList = "buttons";

    textContainer.appendChild(yesButton);
    textContainer.appendChild(noButton);

    yesButton.addEventListener("click", () =>
    {
        resetDOM();
    })

    noButton.addEventListener("click", () =>
    {
        resetDOM();
    })
}

