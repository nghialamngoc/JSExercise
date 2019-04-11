
//Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
function determineLeapYear(year){

    var twoNumberEndOfTheYear = year.toString().trim().substring(year.toString().trim().length - 2);

    if(twoNumberEndOfTheYear === "00")
        return year % 400 === 0;
    else
        return year % 4 === 0;
}

//
function leapyear(year)
{
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

determineGivenYear(year);