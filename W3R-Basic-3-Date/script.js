function updateTime() {

    let separator = document.form.separator.value;
    let dateFormat = document.form.dateFormat.value;

    let today = new Date();

    let year = today.getFullYear();
    let month = ((today.getMonth() +1) < 10) ? `0${today.getMonth() +1}` : today.getMonth() +1; // adds a 0 if the number is below 10 to maintain a double digit
    let day = (today.getDate() < 10) ? `0${today.getDate()}` : (today.getDate()); // adds a 0 if the number is below 10 to maintain a double digit

    switch(dateFormat){
        case "dayFirst":
            date = `${day}${separator}${month}${separator}${year}`;
            break;
        default:
            date = `${month}${separator}${day}${separator}${year}`;
            break;
    }

    document.getElementById('demo').innerHTML = date;
}

document.getElementById("separator").addEventListener("change", updateTime);
document.getElementById("dateFormat").addEventListener("change", updateTime);