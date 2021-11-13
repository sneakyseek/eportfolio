import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import pillar from "../assets/greek-building-with-four-pillars-svgrepo-com.svg"
import leftImage from "../assets/undraw_meet_the_team_re_4h08.svg"
import rightImage from "../assets/undraw_connecting_teams_re_hno7.svg"
import BackgroundEvent from "../components/BackgroundEvent.jsx";
import { Link } from 'react-router-dom'
import {Helmet} from 'react-helmet';

const Socials = () => {
    return (

        <div className="socials">
            <BackgroundEvent/>
            <Helmet>
                <title>Brian Hays | Socials</title>
            </Helmet>
            <img src={leftImage} alt="" className="left__image2" />
            <img src={rightImage} alt="" className="right__image2" />

            <div className="social__container">
            <h1 className="social__header">
                Feel free to find out more about<br/> <span className="purple">myself </span> 
                and my <span className="purple">projects</span> below!
            </h1>
            <img src={pillar} alt="" className="pillar pillarOne" />
            <img src={pillar} alt="" className="pillar pillarTwo" />
            <img src={pillar} alt="" className="pillar pillarThree" />
            <a href="https://www.linkedin.com/in/brian-hays-34476621b/" target="_blank"
            className="social__a">
            <button className="social__button linkedin">
                <i><FontAwesomeIcon icon={['fab','linkedin']} className="icon"/></i>
            </button>
            </a>
            <a href="https://github.com/bchayss" target="_blank" className="github__a"
            className="social__a">
            <button className="social__button github">
                <i><FontAwesomeIcon icon={['fab','github']} className="icon"/></i>
            </button>
            </a>
            <a href="https://vt.joinhandshake.com/users/23219433" target="_blank"
            className="social__a">
            <button className="social__button handshake">
                <i><FontAwesomeIcon icon={['fas', 'handshake']} className="icon"/></i>
            </button>
            </a>
            </div>
        </div>
    )
}

export default Socials
