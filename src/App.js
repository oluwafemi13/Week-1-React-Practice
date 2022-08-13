
import './App.css';
import ClassComponent from './ClassComponent';
import functionalComponent from './functionalComponent';
import About from './About';
import Home from './Home';
import Contact from './Contact';


import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className='App'>
        <ul>
            <li>
              <link to="/">Home</link>
            </li>
            <li>
              <link to="/About">About Us</link>
            </li>
            <li>
              <link to="Contact">Contact Us</link>
            </li>
        </ul>
       
      </div>

<Routes>
    <Route exact path='/' element={<Home/>}></Route>
    <Route exact path='/About' element={<About/>}></Route>
    <Route exact path='/Contact' element={<Contact/>}></Route>
</Routes>
    </Router>
        
       
       
      
   
  );
}

export default App;
