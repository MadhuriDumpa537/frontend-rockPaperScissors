let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScr=document.querySelector("#user-score");
const compScr=document.querySelector("#comp-score");



const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScr.innerText=userScore;
        
        msg.innerText=`you win your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScr.innerText=compScore;
        msg.innerText=`you lost  ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
   


}
const gameDraw=()=>{
    console.log("game is draw play again");
    msg.innerText="game is draw play agian";
    msg.style.backgroundColor="grey";
}
const genComChoice=()=>{
    const options=["rock","paper","scissors"];

    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const playGame=(userChoice)=>{
    const compChoice=genComChoice();

    console.log("compChoice = ",compChoice);
    
     if(userChoice===compChoice){
        gameDraw();
    }
    else{
let userWin=true;

    
    if(userChoice==="rock"){
        userWin=compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
        userWin=compChoice==="scissors"?false:true;
    }
    else{
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);

}
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
       
        console.log("user choice = ", userChoice);
        playGame(userChoice);
    })
})