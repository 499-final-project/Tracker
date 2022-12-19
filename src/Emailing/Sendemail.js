export function sendemail(Name,Description,eventTime,alertTime,key){
    function formatDate(newDate) {
        const months = {
          0: 'January',
          1: 'February',
          2: 'March',
          3: 'April',
          4: 'May',
          5: 'June',
          6: 'July',
          7: 'August',
          8: 'September',
          9: 'October',
          10: 'November',
          11: 'December',
        }
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        const d = new Date(newDate)
        const year = d.getFullYear()
        const date = d.getDate()
        const monthName = months[d.getMonth()]
        const dayName = days[d.getDay()] // Thu
        let hour=d.getHours()
        const min=d.getMinutes()
        let amOrPm=""
        if (hour>12){
            hour-=12;
            amOrPm="PM";
        }
        else amOrPm="AM"
        const formatted = `${dayName}, ${date} ${monthName} ${year} ${hour}:${min} ${amOrPm} `
        return formatted.toString()
      }
    let email = {
        To:localStorage.getItem("email"),
        Text:`<h1>Your Task : ${Name}<br></h1>
        <h3>Details : ${Description}<br>
        Ending on : ${formatDate(eventTime)}<br></h3>`,
        EventTime:eventTime,
        AlertTime:alertTime,
        Key:key

    }
    fetch('http://localhost:4000/sendEmail',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(email)
        
    }).then((resp)=>{
        console.log('email sent',resp)
    })
}