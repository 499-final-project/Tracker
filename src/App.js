
import './App.css';
import { SignInWithGoogle1  } from './Authentication/signin';
import {Logout} from './Authentication/logout';
import {AuthProvider} from './Authentication/AuthContext'
import {BrowserRouter, Route, Routes}from 'react-router-dom';
import PrivateRoutes from './Authentication/PrivateRoute';
import TaskList from './components/TaskList'
import UpcomingTask from './components/UpcomingTask'
import ContactUs from './components/ContactUs'
import HomePageContainer from './components/HomePageContainer'
import  Navbar  from './components/Navbar';
import TaskCalander from './components/TaskCalander';
function App() {

  
  return (
    <BrowserRouter>
      <AuthProvider>
    <div className="App">
      
        <Navbar/>
        <Routes>
         <Route exact path="/" element={<HomePageContainer/>} /> 
          <Route  path="/login" element={<SignInWithGoogle1/>} />
         
          <Route element={<PrivateRoutes />}>
            <Route path="/tasklist" element={<TaskList/>} />
            <Route exact path="/home" element={<Logout/>} /> 
            <Route exact path="/UpcomingTask" element={<UpcomingTask/>} />
           <Route exact path="/TaskCalander" element={<TaskCalander/>} />
        
          </Route>
          <Route exact path="/ContactUs" element={<ContactUs/>} />
        </Routes>
        
       
      
    </div>
    </AuthProvider>
    </BrowserRouter>
  );

}

export default App;
