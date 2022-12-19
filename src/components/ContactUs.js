import ContactForm from './ContactForm';
import '../styles/contact.css';

const ContactUs = () => {
    return (
      <div>
        
        <div>
            <h1>Contact Us</h1>
        </div>
        
        <div className= "contact_info" >
        <b>Address:</b>
        <a href=" ">695 Park Ave, New York, NY 10065</a>
        <br></br>
        <b >Email:</b>
        <a href=" ">trackertesting499@gmail.com</a>
        <br></br>
        <b>Phone: </b>
        <a href="tel:212-772-4000">212-123-1234</a>
        </div>
        <div>
        <ContactForm></ContactForm>
        </div>
        
      </div>
      
    );    
  }
  
  export default ContactUs;