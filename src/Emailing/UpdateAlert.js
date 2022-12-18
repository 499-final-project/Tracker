export function UpdateAlert(Name,Description,eventTime,alertTime,key){
    let alert = {
        To:localStorage.getItem("email"),
        Text:`<h1>Your Task : ${Name}<br></h1>
        <h3>Details : ${Description}<br>
        Ending on : ${eventTime}<br></h3>`,
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