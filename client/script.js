const myDate = new Date();

const day = myDate.getDate();
console.log(day);
//DYNAMIC MONTH COUNTDOWN(i did it yeppie ^-^!!!... it was'nt that difficult to be honest -_-)//
function Month() {
    const myMonth = new Date();
    var month = myMonth.getMonth();
    console.log(month);

    switch(month){
        case 0:
            totalDays = 31;
        break;
        case 1:
            //Fodam-se os anos bissextos
            //Fuck leap years
            //閏年なんてクソ喰らえ
            totalDays = 28;
        break;
        case 2:
            totalDays = 31;
        break;
        case 3:
            totalDays = 31;
        break;
        case 4:
            totalDays = 30;
        break;
        case 5:
            totalDays = 31;
        break;
        case 6:
            totalDays = 30;
        break;
        case 7:
            totalDays = 31;
        break;
        case 8:
            totalDays = 30;
        break;
        case 9:
            totalDays = 31;
        break;
        case 10:
            totalDays = 30;
        break;
        case 11:
            totalDays = 31;
        break;
    }
return totalDays;
}
//DAYS LEFT//

var totalDays = Month();

var daysLeft = totalDays - day;

console.log(daysLeft);
//CHECKS IF IT SHOULD DISPLAY DAY, DAYS OR TODAY//

const daysDisplay = document.querySelector("#DAYSLEFT");
const daysSpan = document.querySelector("#span-days");
const pEnds = document.querySelector("#p-ends");

daysDisplay.innerHTML = `${daysLeft} DAYS`;
function setHoursLeft(){
    let hours = myDate.getHours();
    let mins = myDate.getMinutes();
    let hoursLeft = 24 - hours;
    let minsLeft = 60 - mins;
    pEnds.innerHTML = "ENDS TODAY IN ";
    DAYSLEFT.innerHTML = hoursLeft + " HOURS";
    if (24 - hours <= 0){
        DAYSLEFT.innerHTML = minsLeft + " MINUTES";
    }else{}   
}
//CHECKS IF IT SHOULD DISPLAY DAYS OR HOURS//
if (daysLeft == 1){
    DAYSLEFT.textContent = "1 DAY";
}else if (daysLeft < 1){
    setHoursLeft()
}
