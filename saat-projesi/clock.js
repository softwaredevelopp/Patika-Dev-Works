let userName = prompt("Adınız nedir ?") 
document.getElementById('myName').innerHTML = userName

let myClock = document.getElementById('myClock');
function currentTime()  
{
    var today = new Date();
    var second = today.getSeconds();
    var minute = today.getMinutes();
    var hours = today.getHours();
    var day = today.getDay();
    var currentDay = ""

    if (day == 0) {
        currentDay = "pazar"
    }
    else if (day == 1) {
        currentDay = "pazartesi"
    }
    else if (day == 2) {
        currentDay = "salı"
    }
    else if (day == 3) {
        currentDay = "çarşamba"
    }
    else if (day == 4) {
        currentDay = "perşembe"
    }
    else if (day == 5) {
        currentDay = "cuma"
    }
    else if (day == 6) {
        currentDay = "cumartesi"
    }
    else {
        currentDay = "Null"
    }
    myClock.innerHTML = `${hours}:${minute}:${second} ${currentDay}`
}
currentTime()
setInterval(currentTime, 1000);