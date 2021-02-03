import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter as Router} from 'react-router-dom'
import Sidebar from './components/sidebar';
function App() {
  return (
    <Router >
      <Sidebar></Sidebar>
    <Navbar></Navbar>
    </Router>
  );
}

export default App;
