function guessNumber(){
    var number = Math.floor(Math.random() * 1);
    var guess = prompt('What is your guess number?');
    if(Number.parseInt(guess) === number)
        console.log("Good Work");
    else
        console.log("Not matched");
}

guessNumber();