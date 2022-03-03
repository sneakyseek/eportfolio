import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import personalLogo from '../assets/logopfp.jfif'
import BackgroundEvent from "../components/BackgroundEvent.jsx";
import resume from "../assets/Brian Hays Heroku Resume.pdf"
import profilePicture from "../assets/photOfMeReact2.jpg";
import { toggleModal } from "./Contact";

const Landing = () => {

    function getTime(){
        
        var today = new Date()
        var curHr = today.getHours()

        if (curHr < 12) {
            return "Morning"
        } 
        else if (curHr < 18) {
            return "Afternoon"
        } 
        else {
            return "Evening"
        }
    }

    return (
        <>
        <BackgroundEvent/>
        <div className="landing">
        <div className="text__img--wrapper">
            <figure className="landing__logo">
                <div className="image__wrapper">
                <img src={profilePicture} alt="" className="landing__logo--img" />
                </div>
                <div className="text__container">
                <h1 className="landing__message">
                Good <span className="purple">{getTime()}!</span>
                </h1>
                <p className="landing__paragraph">
                My name is Brian Hays. I am a Junior at <span className="purple">Virginia Tech</span> studying Computer Science.
                In my spare time, I <span className="purple">freelance</span> and study as a <span className="purple">frontend developer. </span> 
                I enjoy creating aesthetic, performant, and <span className="purple">enjoyable website experiences</span> for users. Find out more

                <span className="purple click about__me--btn" onClick={() => toggleModal()}>
                <FontAwesomeIcon icon="arrow-right" className="left__arrow--icon">

                </FontAwesomeIcon>    
                     about me
                <FontAwesomeIcon icon="arrow-left" className="right__arrow--icon">

                </FontAwesomeIcon>  
                </span>
                </p>
                <div className="social__list">
                    <a href={resume} class="social__link click" target="_blank">
                        <FontAwesomeIcon icon="file-pdf" className="file__icon">

                        </FontAwesomeIcon>
                        <h1 className="resume__tag">
                            My Resume
                        </h1>
                    </a>
                </div>
                </div>
            </figure>                
        </div>
        </div>
        </>
    )
}

export default Landing
