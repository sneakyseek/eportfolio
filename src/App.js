import React from "react"
import Home from "./pages/Home.jsx";
import Nav from "./components/Nav.jsx";
import Projects from "./pages/Projects.jsx";
import {BrowserRouter as Router, Route} from "react-router-dom"; 
import Languages from "./pages/Languages.jsx";
import Socials from "./pages/Socials.jsx";
import Contact from "./components/Contact.jsx"

function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Route path="/" exact component={Home}/>
      <Route path="/projects" exact component = {Projects}/>
      <Route path="/stack" exact component = {Languages}/>
      <Route path="/socials" exact component={Socials}/>
      <Contact/>
    </div>
    </Router>
  );
}

export default App;
