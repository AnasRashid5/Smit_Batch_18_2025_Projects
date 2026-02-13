function Clock() {
    var dateObj = new Date();
    var day = dateObj.getDay();

    var showDayName = document.getElementById("dayName");
    var showDate = document.getElementById("date");
    var showYear = document.getElementById("year");

    var dateString = dateObj.toString();
    var dateArr = dateString.split(" ");

    var dayNames = ["Sun,", "Mon,", "Tue,", "Wed,", "Thu,", "Fri,", "Sat,"];
    showDayName.innerText = dayNames[day];
    showDate.innerText = dateArr[2] + " " + dateArr[1];
    showYear.innerText = dateArr[3];
}

function updateTime() {
    var dateObj = new Date();
    var hours = dateObj.getHours();
    var minutes = dateObj.getMinutes();
    var seconds = dateObj.getSeconds();

    var showHours = document.getElementById("hours");
    var showMinutes = document.getElementById("minutes");
    var showSeconds = document.getElementById("seconds");
    var showPeriod = document.getElementById("period");

    var period = "AM";

    if (hours > 12) {
        hours = hours - 12;
        period = "PM";
    } else if (hours == 0) {
        hours = 12;
        period = "AM";
    } else if (hours == 12) {
        period = "PM";
    }

    if (hours < 10) {
        showHours.innerText = "0" + hours;
    } else {
        showHours.innerText = hours;
    }

    if (minutes < 10) {
        showMinutes.innerText = "0" + minutes;
    } else {
        showMinutes.innerText = minutes;
    }

    if (seconds < 10) {
        showSeconds.innerText = "0" + seconds;
    } else {
        showSeconds.innerText = seconds;
    }

    showPeriod.innerText = period;
}

Clock();
setInterval(updateTime, 1000);