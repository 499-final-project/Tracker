//Allows us to print out the month and week names in string 

const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
const weekdays = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

//Returns the month name along with the date for display
var getMonthName = () =>{
    let str = "";
    let current = new Date();
    let month = current.getMonth();

    str += months[month];
    str += " "+current.getDate();

    return str;
}

//Returns the week name in string
var getWeekName = () =>{
    let current = new Date();
    let week = current.getDay();

    return weekdays[week];
}

export {getMonthName, getWeekName};

//function to convert timestamp to date

function convertTimestamp(timestamp) {
    let date = new Date(timestamp);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dt = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (dt < 10) {
        dt = '0' + dt;
    }
    if (month < 10) {
        month = '0' + month;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    return dt + '/' + month + '/' + year + ' ' + hours + ':' + minutes + ':' + seconds;
}

export {convertTimestamp};

//function to convert date to timestamp 
function convertDate(date) {
    let timestamp = new Date(date).getTime();
    return timestamp;
}

export {convertDate};


