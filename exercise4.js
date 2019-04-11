//Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string 

var text = " text string";

function rotateString(){
  setInterval(function(){
      text = text[text.length - 1] + text.substring(0, text.length - 1);
console.log(text)
  }, 1000)
}
rotateString();