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




//convert
//function to turn date and time into string
const dateToString = (date) => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
   
    
    let time = year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
    return time;
}
//turn string back to date
const stringToDate = (date) => {
    let year = date.split("-")[0];
    let month = date.split("-")[1];
    let day = date.split("-")[2].split(" ")[0];
    let hour = date.split(" ")[1].split(":")[0];
    let minute = date.split(":")[1];
    let time = new Date(year, month - 1, day, hour, minute);
    return time;
}


// Path: src\helper\getDate.js
// Compare this snippet from src\Views\NewTask.js:
// import  DateTimePicker  from 'react-datetime-picker';
// import { dateToString } from '../helper/getDate';
//  const NewTask = ({modal, toggle, add}) => {
//     const {currentUser} = useContext(AuthContext);
//     const [taskName, setTaskName] = useState('');
//     const [description, setDescription] = useState('');
//     const [startdate, setStartDate] = useState(new Date());
//     const [enddate, setEndDate] = useState(new Date());
// 
// let taskBox = 
//     {
//         Name:'',
//         Description:'',
//         key:'',
//         Startdate: '',
//         Enddate: ''
//     }
//  
//     //function to turn string into date
//     //function parseDate(str) {
//        // var mdy = str.split('-');
//        // return new Date(mdy[0], mdy[1]-1, mdy[2]);
//    // }
//     const handleInput = (e) => 
//     {
//         const {name, value} = e.target
//         
//         if(name === "taskName")
//         {
//             setTaskName(value)
//         }
//         else if (name === "description")
//         {
//             setDescription(value)
//         }
//        
// 
//         
//         
//     }
//     
// 
//     const handleAdd = (e) => {
//         e.preventDefault()
//         taskBox.Name = taskName
//         taskBox.Description = description
//         taskBox.Startdate = dateToString(startdate)
//         taskBox.Enddate = dateToString(enddate)
//         taskBox.key = writeTaskData(currentUser.uid, taskName, description, taskBox.Startdate,
//convert 24 hour time to 12 hour time
const convertTime = (time) => {
    let hour = time.getHours();
    let minute = time.getMinutes();
    let ampm = hour >= 12 ? 'pm' : 'am';
    hour = hour % 12;
    hour = hour ? hour : 12;
    minute = minute < 10 ? '0' + minute : minute;
    let strTime = hour + ':' + minute + ' ' + ampm;
    return strTime;
}


export {convertTimestamp, dateToString, convertTime, stringToDate};
