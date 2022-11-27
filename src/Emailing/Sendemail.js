export function sendemail(Name,Description,EventTime,Notify){
    console.log(Event)
    let email = {
        to:localStorage.getItem("email"),
        from:'trackertesting499@gmail.com',
        subject:`Tracker Notification`,
        text:`Your new Task: ${Name}<br>
        Details:${Description}<br>
        Has been added to your task list.`,
        eventTime:EventTime,
        notify:Notify,

    }
    fetch('http://localhost:4000/send-email',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(email)
        
    }).then((resp)=>{
        console.log('email sent',resp)
    })
}