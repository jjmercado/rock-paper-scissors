let computerChoice = "";
let playerChoice = "";
let randomChoice = ["rock", "paper", "scissor"];
let isRunning = true;
let choice = 0; 


while (isRunning) 
{
    choice = randomChoice[Math.floor(Math.random() * randomChoice.length)];
    playerChoice = prompt("What is your choice? Rock - Paper - Scissor");
    playerChoice.toLowerCase();

    console.log(playRound(choice, playerChoice));

    let decision = prompt("Want to play again? - Yes - No")
    decision.toLowerCase();
    if (decision === "no" || decision === "n") 
    {
        isRunning = false;   
    }
    else
    {
        isRunning= true;
    }

}


function playRound(choice, playerChoice)
{
    if(choice === playerChoice)
    {
        return "Equals! No winner";
    }
    else
    {
        if (choice === "rock" && playerChoice === "paper") 
        {
            return "Player wins! Paper covers rock";    
        }
        else if (choice === "rock" && playerChoice === "scissor") 
        {
            return "Computer wins! Rock hits scissor";    
        } 
        else if(choice === "paper" && playerChoice === "rock")
        {
            return "Computer wins! Paper covers rock";
        }
        else if(choice === "paper" && playerChoice === "scissor")
        {
            return "Player wins! Scissor cuts paper";
        }
        else if(choice === "scissor" && playerChoice === "paper")
        {
            return "Computer wins! Scissor cuts paper";
        }
        else if(choice === "scissor" && playerChoice === "rock")
        {
            return "Player wins! Rock hits scissor";
        }
        else 
        {
            return "Wrong input!";
        }
    }
}

