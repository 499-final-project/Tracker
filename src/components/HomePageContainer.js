import Slideshow from '../helper/slideshow'
import homepagepic from '../images/homepagepic.png'
import '../styles/homepage.css'

const HomePageContainer = () => {
  
  return (
    <div>

      <div className='section1'>
          <div className='section1img'>
            <img src={homepagepic} alt="homepic" />
          </div>
          <div className='section1txt'>
            <h2>Welcome to Tracker</h2>
            <h3>Have you ever had a time where you couldn't keep track of the things you needed to finish? 
            <br></br><br></br>
            Well, you have landed just at the right place.</h3>
            <p></p>
          </div>
        </div>

        <div className='section2'>
          <h3> Here at Tracker we have a variety of resources to help you keep track of things you need to do.
            Things such as ...
          </h3>
        </div>
        <div className='contentholder'>
          <div className='slideshow-content'>
          <Slideshow />
          </div>
        </div>
    
     
    
    
    

    </div>
    
  );
};
export default HomePageContainer;

