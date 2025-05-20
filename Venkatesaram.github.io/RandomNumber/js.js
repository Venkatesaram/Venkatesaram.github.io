//Selecting inputBox,h1-resultName,and create random number,default score,totalScore
let guessNumber = document.getElementById("guessNumber")
let pResult = document.getElementById("pResult");
let randomNumberNew = Math.floor(Math.random()*10)+1
let h1Score = document.getElementById("h1Score")
let totalScore = 10


function check()
{
    let enteredNumber = guessNumber.value
    if(enteredNumber == randomNumberNew)
    {
        pResult.innerHTML = "Right"
        console.log("Right")
        alert("YOU WON THE MATCH...CONGRATULATIONS..")

    }
    else{
        totalScore = totalScore-1
        pResult.innerHTML = "Wrong"
        h1Score.innerHTML = "Score :"+ totalScore
    }
}