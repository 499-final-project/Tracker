
import {getMonthName} from "../helper/getDate.js";
const UpcomingTask = () => {
    return (
      <div >
        
        <div> 
            <h1>Upcoming Task</h1>
            <h2>Today's Date: {getMonthName()}</h2> 
            <h2>work in progress...</h2>
        </div>
      </div>
    );    
  }
  
  export default UpcomingTask;