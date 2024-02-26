const myDate = new Date();
var day = myDate.getDate();
console.log(day);

function Month() {
    const myMonth = new Date();
    var month = myMonth.getMonth();
    if (month = 2){
        console.log("It worked");
    }
}
//DAYS LEFT//



var daysLeft = 28 - day;
var daysLeft= daysLeft.toString();

let DAYS = document.getElementById('DAYSLEFT').innerHTML = daysLeft;
DAYS.innerText = daysLeft;

console.log(daysLeft);