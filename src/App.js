
import './App.css';
import { SignInWithGoogle1  } from './Authentication/signin';
import {Homepage} from './Authentication/homepage';
import {AuthProvider} from './Authentication/AuthContext'
import {BrowserRouter, Route, Routes}from 'react-router-dom';
import PrivateRoutes from './Authentication/PrivateRoute';

function App() {

  
  return (
    <BrowserRouter>
      <AuthProvider>
    <div className="App">
      <header className="App-header">
          <p>
         Tracker test
        </p>
        <Routes>
   
        <Route  path="/login" element={<SignInWithGoogle1/>} />

        <Route element={<PrivateRoutes />}>
        <Route path="/home" element={<Homepage/>} />
        </Route>

        </Routes>
        
      </header> 
      
    </div>
    </AuthProvider>
    </BrowserRouter>
  );

}

export default App;
