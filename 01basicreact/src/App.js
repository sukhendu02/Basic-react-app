// import logo from './logo.svg';
import './App.css';

import Nav from './components/Nav.jsx'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import Blog from './components/Blog.jsx'

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
        <Nav/>
      <div>
    <Routes>        
      <Route path="/"  element={<Home/>} />
      <Route path="/blog"  element={<Blog />}/>
      <Route path="/about"  element={<About/>}/>
    </Routes>
    </div>

   
   </>
  );
}

export default App;
