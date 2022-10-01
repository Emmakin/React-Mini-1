import React from "react";
//where to put the svg icons

import React,{useState} from "react";


function App() {
  return (
    <Navbar>
      <NavItem icon="🌁" />
      <NavItem icon="📮" />
      <NavItem icon="🧩" />
    </Navbar>
  );
}

function Navbar(props){
  return (
    <nav className="navbar">
      <ul className="navbar-nav"> { props.children} </ul>
    </nav>
  )
}

function NavItem(props){

  const [open, setOpen] = useState(false);  
  
  return(
    <li className="nav-item">
      <a href="#"className="icon-button">
        {props.icon}
      </a>
    </li>
  );
}







export default App;
