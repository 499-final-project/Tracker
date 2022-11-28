export function UpdateAlert(Name,Description,eventTime,alertTime,key){
    let alert = {
        To:localStorage.getItem("email"),
        Subject:`Tracker Notification`,
        Text:`Your Task : ${Name}<br>
        Details : ${Description}<br>
        Ending on : ${eventTime}<br>`,
        EventTime:eventTime,
        AlertTime:alertTime,
        Key:key
    }
    fetch('http://localhost:4000/updateAlert',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(alert)
    }).then((resp)=>{
        console.log('alert removed sent',resp)
    })
}