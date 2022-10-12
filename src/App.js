import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList'
import { Nav } from 'reactstrap';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <TaskList></TaskList>

    </div>
  );
}

export default App;
