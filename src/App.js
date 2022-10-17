import logo from './logo.svg';
import './App.css';
import { Nav } from 'reactstrap';
import Navbar from './components/Navbar'
import TaskList from './components/TaskList'
import HomePageContainer from './components/HomePageContainer'
import UpcomingTask from './components/UpcomingTask'
import ContactUs from './components/ContactUs'
import { Routes ,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    
    <Routes>
        <Route exact path="/" element={<HomePageContainer/>} />
        <Route exact path="/TaskList" element={<TaskList/>} />
        <Route exact path="/UpcomingTask" element={<UpcomingTask/>} />
        <Route exact path="/ContactUs" element={<ContactUs/>} />
    </Routes>  
    </div>
  );
}

export default App;
