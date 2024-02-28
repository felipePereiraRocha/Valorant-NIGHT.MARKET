const myDate = new Date();
var day = myDate.getDate();
console.log(day);
//DYNAMIC MONTH COUNTDOWN(i will figure that one out eventualy)//
function Month() {
    const myMonth = new Date();
    var month = myMonth.getMonth();
    console.log(getMonth());
    if (month = 3){
        var totalDays = 28;
        return totalDays - 50;
    
    
}
}
//DAYS LEFT//

var daysLeft = 28 - day;

var DAYS = document.getElementById('DAYSLEFT').innerHTML = daysLeft;

console.log(daysLeft);
//CHECKS IF IT SHOULD DISPLAY DAY OR DAYS//

if (daysLeft = 1){
    var DAY = document.getElementById('span-days').innerHTML = " DAY";
}else if (daysLeft <= 0){
    var DAY = document.getElementById('span-days').innerHTML = " TODAY";
    var DAYS = document.getElementById('DAYSLEFT').innerHTML = "";
}else {
    var DAY = document.getElementById('span-days').innerHTML = " DAYS";
}