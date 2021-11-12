import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Nav = () => {
    let contrastToggle = false;
    function toggleContrast(){
        contrastToggle = !contrastToggle;

        if(contrastToggle){
            document.body.classList += " dark-theme"
        }
        else{
            document.body.classList.remove("dark-theme");
        }
    }
    return (
        <div className="nav">
            <ul className="navigation__links">
                <Link to="/" className="navigation__link 
                                                link__hover-effect 
                                                link__hover-effect--black">
                    Landing
                </Link>
                <Link to="/projects" className="navigation__link 
                                                link__hover-effect 
                                                link__hover-effect--black">
                    Projects
                </Link>
                <Link to="/stack" className="navigation__link  
                                        link__hover-effect 
                                        link__hover-effect--black">
                    My Stack
                </Link>
                <Link to="/socials" className="navigation__link
                                        link__hover-effect 
                                        link__hover-effect--black">
                    Socials
                </Link>
                <li className="nav__link click">
                    <button className="
                    nav__link--anchor dark__mode--button
                    " onClick={() =>toggleContrast()}>
                    <FontAwesomeIcon icon='adjust' className="fas fa-adjust"/>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Nav
