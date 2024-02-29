const myDate = new Date();
const day = myDate.getDate();
console.log(day);
//DYNAMIC MONTH COUNTDOWN(i did it yeppie ^-^!!!  ... it was'nt that difficult to be honest-_-)//
function Month() {
    const myMonth = new Date();
    const month = myMonth.getMonth();
    console.log(month);
    if (month == 0){
        var totalDays = 31;//january//
}else if (month == 1) {
    var totalDays = 29;//february//
}else if (month == 2) {
    var totalDays = 29;//march//
}else if (month == 3) {
    var totalDays = 31;//april//
}else if (month == 4) {
    var totalDays = 30;//may//
}else if (month == 1) {
    var totalDays = 31;//june//
}else if (month == 1) {
    var totalDays = 30;//july//
}else if (month == 1) {
    var totalDays = 31;//august//
}else if (month == 1) {
    var totalDays = 30;//september//
}else if (month == 1) {
    var totalDays = 31;//october//
}else if (month == 1) {
    var totalDays = 30;//november//
}else if (month == 1) {
    var totalDays = 31;//december//
}
return totalDays
}
//DAYS LEFT//

var totalDays = Month();

var daysLeft = totalDays - day;

var DAYS = document.getElementById('DAYSLEFT').innerHTML = daysLeft + " DAYS";

console.log(daysLeft);
//CHECKS IF IT SHOULD DISPLAY DAY, DAYS OR TODAY//

const daysDisplay = document.querySelector("#DAYSLEFT");
const daysSpan = document.querySelector("#span-days");
const pEnds = document.querySelector("#p-ends");
function setHoursLeft(){
    var hours = myDate.getHours();
    var mins = myDate.getMinutes();
    var hoursLeft = 24 - hours;
    var minsLeft = 60 - mins;
    pEnds.textContent = "ENDS TODAY IN ";
    DAYSLEFT.textContent = hoursLeft + " HOURS";
    if (24 - hours <= 0){
        DAYSLEFT.textContent = minsLeft + " MINUTES";
    }else{}   
}

if (daysLeft == 1){
    DAYSLEFT.textContent = "1 DAY";
}else if (daysLeft < 1){
    setHoursLeft()
}
