function daysLeftUntilNextChristmas(){
    var today = new Date();
    var currentYear = today.getFullYear();
    var dchristmas = new Date(currentYear, 11, 25);
    if(today.getMonth >= 11 && today.getDate > 25)
        dchristmas.setFullYear = currentYear + 1;
    var oneday = 1000*60*60*24;

    console.log(Math.ceil((dchristmas.getTime() - today.getTime()) / oneday) + " days left to next Christmas!")
    
}
daysLeftUntilNextChristmas();