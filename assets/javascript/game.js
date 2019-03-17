$(document).ready(function(){
   

    var winText = document.getElementById("win-count");
    var lossText = document.getElementById("loss-count");
    var tarNum = Math.floor(Math.random() * 120) +19;
    var userGuess = document.getElementById("totalScore");
    document.getElementById("randomNumGenerator").innerHTML = tarNum;


    $("randomNumGenerator").text(tarNum);

function generateRandomNumber(){
    return Math.floor(Math.random() * 12) +1; 
    }
var totalCount = 0;
var button1RandomNumber = generateRandomNumber();
var button2RandomNumber = generateRandomNumber();
var button3RandomNumber = generateRandomNumber();
var button4RandomNumber = generateRandomNumber();

$("#button-1").on("click", function(){
    totalCount += button1RandomNumber
    totalDisplay();
    checkIfGameOver();
    
});

$("#button-2").on("click", function(){
    totalCount += button2RandomNumber
    totalDisplay();
    checkIfGameOver();
    
});

$("#button-3").on("click", function(){
    totalCount += button3RandomNumber
    totalDisplay();
    checkIfGameOver();
    
});

$("#button-4").on("click", function(){
    totalCount += button4RandomNumber
    totalDisplay();
    checkIfGameOver();
   
});
console.log(totalCount);
console.log(tarNum);

function totalDisplay(){
    document.getElementById("totalScore").innerHTML = totalCount;

}


function gameReset(){
    tarNum = Math.floor(Math.random() * 120) + 19;
    document.getElementById("randomNumGenerator").innerHTML = tarNum;
    totalCount=0;
    totalDisplay();
    button1RandomNumber = generateRandomNumber();
    button2RandomNumber = generateRandomNumber();
    button3RandomNumber = generateRandomNumber();
    button4RandomNumber = generateRandomNumber();
    
}


function checkIfGameOver(){
if (totalCount === tarNum) {
    winText.textContent++;
    console.log(totalCount);
    alert("You Win!")
    gameReset();
   

}

else if (totalCount > tarNum) {
    lossText.textContent++;
    console.log(totalCount);
    console.log(tarNum);
    alert("You lose!, Try again!")
    gameReset();
        
}


}
});
