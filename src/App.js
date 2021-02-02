import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (
    <Router >
    <Navbar></Navbar>
    </Router>
  );
}

export default App;
