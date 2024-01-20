import { useRef } from "react";
import "./header.scss";

const Header = ()=>{
  const barRef = useRef(null);
  const navRef = useRef(null);
  const bgRef = useRef(null);

  function menuOnClick() {
    barRef?.current?.classList.toggle("change");
    navRef?.current?.classList.toggle("change");
    bgRef?.current?.classList.toggle("change-bg");
  }

  return(
    <>
    <div id="menu">
      <div id="menu-bar" ref={barRef} onClick={menuOnClick}>
        <div id="bar1" className="bar"></div>
        <div id="bar2" className="bar"></div>
        <div id="bar3" className="bar"></div>
      </div>
      <nav className="nav" ref ={navRef} id="nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav> 
    </div>
    <div className="menu-bg" ref ={bgRef} id="menu-bg"></div>
    </>
)}

export default Header;

