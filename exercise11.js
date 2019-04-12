cc// function check(string){
//     if (string.indexOf("Java") === 0)
//         return true;
//     return false;
// }

// console.log(check("aJavaScript"));


// function check(number1, number2){
    
//     if(
//         (50 >= number1 && number1 <= 99) ||
//         (50 >= number2 && number2 <= 99) 
//     )
//         return true;
//     return false;
// }   

// console.log(check(40, 49));

// function check(string){
//     if(string.indexOf("Script") === 4)
//     {              
//         return string.slice(0, 4) + string.slice(10);
//     }
//     return string;
        
// }

// console.log(check("1234acript56789"));

// function check(){
//     return Math.max(...arguments);
// }

// console.log(check(1, 8, 3, 7));

// function check(num1, num2){
//     return Math.abs(100 - num1) === Math.abs(100 - num2) ? "Both" : Math.abs(100 - num1) < Math.abs(100 - num2) ? num1 : num2;
// }

// console.log(check(110, 90))


// function check_char(str, char)
//  {
//   ctr = 0;
//   for (let i = 0; i < str.length; i++)
//   {
//     if (str.charAt(i) == char) {
//       ctr++;
//     }
//   }
//   return (ctr >= 2 && ctr <= 4);
// }

// console.log(check_char("Python", "y"));


// function last_digit(x, y, z)
// {
//   if ((x > 0) && y > 0 && z > 0)
//     {
//      return (x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z % 10);
//    }
//   else
//     return false;
// }

function check(string){

    if (string.length > 3){
        return string.substr(0, 3).toLowerCase() + string.slice(3);
    }
    return string.toUpperCase();
}

console.log(check("AWADas"));