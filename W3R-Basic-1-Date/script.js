 function updateTime() {
    let now = new Date();

    // Defines year as in 2019
    let year = now.getFullYear();

    // Defines month as in January, February etc.
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[now.getMonth() + 1];

    // Defines a day between 1 and 31
    let day = now.getDate();

    // Defines a day as in Monday, Tuesday etc.
    let daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let dayOfTheWeek = daysOfTheWeek[now.getDay()]

    // Defines current hour, minute and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = (now.getSeconds() < 10) ? "0" + now.getSeconds() : now.getSeconds();


    // Defines 1st, 2nd, 3rd, 4th etc.
    let dayAppend;
    switch(day) {
        case 1:
            dayAppend = "st";
        case 2:
            dayAppend = "nd";
        case 3:
            dayAppend = "rd";
        default:
            dayAppend = "th";
    }

    // Differentiates PM from AM
    let timeAppend = (hours > 12) ? "PM" : "AM";
    let fullDate = "Today is " + dayOfTheWeek + " " + day + dayAppend + " of " + month + ", " + year + " and it currently is " + hours + ":" + minutes + ":" + seconds + timeAppend;

    document.getElementById("demo").innerHTML = fullDate;
}