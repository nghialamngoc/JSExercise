function AlphabetSoup(str) { 

    var arr = str.split("");
    arr.sort(function(a, b){
        if(a < b)
            return -1;
        else if (a > b)
            return 1;
        else
            return 0;
    })
  // code goes here  
  return arr.join(""); 
         
}