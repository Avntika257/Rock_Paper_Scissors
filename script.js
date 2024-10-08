
let userScore=0;
let compScore=0;
const msg =document.querySelector("#msg");
const uS=document.querySelector("#user-score");
const cS = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");

//RANDOM COMPUTER GENERATOR
const generateCompChoice=()=>{
    const options = ["rock","paper","scissors"]; 
    const randomIndex = Math.floor(Math.random() * 3); //floor() to remove the decimal point value and *3 to get random number range b/w 0-2
    return options[randomIndex];
}


//DRAW GAME FUNCTION
const drawGame= (userWin) =>
{
    console.log("game was draw");
    msg.innerText="Match is drawn! Play again";
    msg.style.backgroundColor="#081b31";
}


//SHOW WINNER
const showWinner = (userWin,userChoice,compChoice) =>
{
if(userWin)
{
    console.log("You win");
    msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
    userScore++;
    uS.innerText=userScore;
}
else{
    console.log("You lose");
    msg.innerText=`You lose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor="red";
    compScore++;
    cS.innerText=compScore;
}
}

//GAME
const playGame = (userChoice) => { 
    console.log("userchoice =", userChoice);
    //GENERATE COMPUTER CHOICE
    const compChoice=generateCompChoice();
    console.log("compChoice =", compChoice);

    if(userChoice === compChoice)
    {
        drawGame();
    }
    else
    {
        let userWin=true;
        if(userChoice ==="rock")
        {
            //scissors,paper
           userWin= compChoice==="paper" ? false: true;
        }
        else if(userChoice === "paper")
        {
            //scissors ,rock
            userWin=compChoice ==="scissors" ? false: true;
        }
        else if(userChoice === "scissors")
        {
            //paper,rock
            userWin=compChoice ==="paper" ? false: true;
        }
        showWinner(userWin, userChoice,compChoice);
    }
}

//USER CHOICE
choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
    let userChoice = choice.getAttribute("id"); 
    playGame(userChoice);
});
});
