// import logo from './logo.svg';
import './App.css';

import Nav from './components/Nav.jsx'
import Contact from './components/Contact.jsx'
import blog from './components/blog.jsx'

import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router";

function App() {
  return (
   <> 
      <Routes>
    <Nav/>
      <Route path="/" component={<home />} />
      <Route path="/contact" component={<contact />}>
        
        <Route path="/blog" component={<blog />} />
      </Route>
    </Routes> 

   

    
   
   </>
  );
}

export default App;
