import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import personalLogo from '../assets/logopfp.jfif'
import BackgroundEvent from "../components/BackgroundEvent.jsx";
import resume from "../assets/Official Resume Brian Hays.pdf"
import profilePicture from "../assets/photOfMeReact2.jpg";

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
                I enjoy creating aesthetic, performant, and <span className="purple">enjoyable experiences</span> for users.
                </p>
                <div className="social__list">
                <a href={resume} class="social__link click" target="_blank">
                    <FontAwesomeIcon icon="file-pdf"></FontAwesomeIcon>
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
