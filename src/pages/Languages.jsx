import React from 'react'
import leftImage from '../assets/undraw_lost_online_re_upmy.svg'
import rightImage from '../assets/undraw_design_notes_re_eklr.svg'
import BackgroundEvent from "../components/BackgroundEvent.jsx";
import {Helmet} from 'react-helmet';
const Languages = () => {
    return (
        
        <div className="languages">
            <Helmet>
                <title>Brian Hays | Stack</title>
            </Helmet>
            <BackgroundEvent/>
            <img src={leftImage} alt="" className="left__image" />
            <img src={rightImage} alt="" className="right__image" />
            <div className="left__container">
                <div className="tech__stack side__div">
                    <h1 className="tech__stack--header">
                        Here are some of my <span className="purple">Technologies!</span>
                    </h1>
                </div>
                <div className="language__section">
                    <figure class="language__section--language">
                        <div className="language__image--wrapper">
                        <img class="language--img" src="https://www.w3.org/html/logo/downloads/HTML5_Badge_128.png" alt=""></img>
                        </div>
                        <span class="language__name">HTML</span>
                    </figure>
                    <figure class="language__section--language">
                        <div className="language__image--wrapper">
                        <img class="language--img" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png" alt=""></img>
                        </div>
                        <span class="language__name">CSS</span>
                    </figure>
                    <figure class="language__section--language">
                        <div className="language__image--wrapper">
                        <img class="language--img java__script--icon" src="https://iconape.com/wp-content/files/ez/353342/svg/javascript-seeklogo.com.svg" alt=""></img>
                        </div>
                        <span class="language__name">JavaScript</span>
                    </figure>
                    <figure class="language__section--language">
                        <div className="language__image--wrapper">
                        <img class="language--img" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-256.png" alt=""></img>
                        </div>
                        <span class="language__name">React</span>
                    </figure>
                </div>
                <div className="technology__para">
                    <p className="tech__paragraph stack__para">
                        I have learned these <span className="purple">key frontend development technologies</span> <br/> while working
                        alongside several <span className="purple">experienced</span> professional <br/>frontend developers in big tech.
                        This has enabled me to <br/>heighten my skills in a short time,  and provide a basis
                        <br/>to further <span className="purple">learn implementations of frontend development.</span>
                    </p>
                </div>
            </div>
            <div className="right__container">
            <div className="language__stack side__div">
                <h1 className="language__stack--header">
                    Here are some of my <span className="purple">Languages!</span>
                </h1>
            </div>
            <div class="technology__section">
                <figure class="language__section--language">
                    <div className="language__image--wrapper">
                    <img class="language--img" src="https://cdn0.iconfinder.com/data/icons/flat-round-system/512/java-256.png" alt=""></img>
                    </div>
                    <span class="language__name">Java</span>
                </figure>
                <figure class="language__section--language">
                    <div className="language__image--wrapper">
                    <img class="language--img" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-256.png" alt=""></img>
                    </div>
                    <span class="language__name">Python</span>
                </figure>
            </div>
            <div className="language__para">
            <p className="lang__paragraph stack__para">
                As a <span className="purple">Computer Science student at Virginia Tech</span>. I have <br/> been able to continue
                development of <span className="purple">key skills</span> in Java, Python, <br/> and various other key languages
                in the software development space. <br/> I am <span className="purple">fully comfortable</span> integrating  these key
                languages into any <br/> software development project.
            </p>
            </div>
        </div>
    </div>
    )
}

export default Languages
