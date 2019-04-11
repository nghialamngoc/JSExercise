function checkDateIsBeingASunday() {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    for (let i = 2014; i < 2050; i++) {
        let date = new Date(i, 0, 1);
        if (days[date.getDay()] === "Sunday")
            console.log(date.getFullYear() + " has 1st January is being a Sunday ");

    }
}

checkDateIsBeingASunday();