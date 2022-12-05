export function sendemail(Name,Description,eventTime,alertTime,key){
    let email = {
        To:localStorage.getItem("email"),
        Text:`<h1>Your Task : ${Name}<br></h1>
        <h3>Details : ${Description}<br>
        Ending on : ${eventTime}<br></h3>`,
        EventTime:eventTime,
        AlertTime:alertTime,
        Key:key

    }
    fetch('http://35.230.161.28:8080/sendEmail',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(email)
        
    }).then((resp)=>{
        console.log('email sent',resp)
    })
}