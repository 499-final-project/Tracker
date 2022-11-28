export function RemoveAlert(key){
    let alert = {
        Key:key
    }
    fetch('http://localhost:4000/deleteAlert',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(alert)
    }).then((resp)=>{
        console.log('alert removed sent',resp)
    })
}