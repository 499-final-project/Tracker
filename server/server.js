const express = require('express'); //used for the server
const app = express();
const cors = require('cors'); 
const nodemailer= require('nodemailer');
const sendgridTransport= require('nodemailer-sendgrid-transport');
const PORT=4000;

app.use(cors());
app.use(express.json());

const transport= nodemailer.createTransport(sendgridTransport({
    auth:{
        api_key: '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'
    }
}))

app.get('/', (req, res) =>{
    res.send('Sendgrid Email Server Testing');
});

app.post('/send-email', (req,res) => {
    
    const recipient=req.body.to
    const sender=req.body.from
    const subject=req.body.subject
    const text=req.body.text;
    // console.log(req.body)
    // console.log(`${recipient}\n${sender}\n${subject}\n${text}`)
    
    // Sendgrid Email msg
    transport.sendMail({
        to:recipient,
        from:sender,
        subject: subject,
        html:text
    })
    .then(console.log('Success!'))
    .catch(err=>console.log(err))
});

app.listen(PORT, () => console.log("Running on Port 4000")); 
