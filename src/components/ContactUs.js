import Navbar from './Navbar';
import ContactForm from './ContactForm';
const ContactUs = () => {
    return (
      
      <div >
        <Navbar />
        
        <div>
            <h1>Contact Us</h1>
        </div>
        
        <div className= "contact info" >
        <b>Address</b>
        <a href="">695 Park Ave, New York, NY 10065</a>
        <br></br>
        <b >Email:</b>
        <a href="">exampleEmail@email.com</a>
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