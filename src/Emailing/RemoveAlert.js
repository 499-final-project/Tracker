export function RemoveAlert(key){
    let alert = {
        Key:key
    }
    fetch('http://35.230.161.28:8080/deleteAlert',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(alert)
    }).then((resp)=>{
        console.log('alert removed sent',resp)
    })
}