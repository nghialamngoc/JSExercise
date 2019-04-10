//This challenge requires you to determine if every alphabetic character in a string has a plus (+) symbol on the left and right side of itself. 
//For example: the string "+a+b+c+" is good but the string "===+3+f=+b+" is not because the "f" does not have a plus symbol to its right. 
//A very simple way to solve this challenge is to create a loop that every time it gets to an alphabetic character, it checks to see if it is surrounded by + symbols.

function SimpleSymbols(str) { 
    
    var arr = str.split("");
    var regex = /[a-zA-Z]/;
    for(let i = 0; i < arr.length; i++){
        if (arr[i].match(regex)){
            
            if(arr[i - 1] !== "+" || arr[i + 1] !== "+") {
                return false;
            }
        }
    }
  // code goes here  
  return true; 
         
}
   
// keep this function call here 
console.log(SimpleSymbols("+a++==+d+"));
console.log(SimpleSymbols("f++d+"));