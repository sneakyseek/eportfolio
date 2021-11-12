import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import bookProjectPicture from "../assets/book_react_project.png"
import eportProjectPicture from "../assets/eportfolio_project.png"
import starsPic from "../assets/undraw_lost_online_re_upmy.svg"
import constructionPic from "../assets/empty.jpg"
import BackgroundEvent from "../components/BackgroundEvent.jsx";
//import pic3 from "../assets/me.jpg"

const Showcase = () => {
    return (
        <div className="projects">
                <BackgroundEvent/>
                <a href="#projects" class="scroll">
            <div class="scroll__icon click"></div>
        </a>
                <img src={starsPic} alt="" className="planet__image" />
                <h1 className="project__shell--title">
                    <figure>
                    Have a look at some of my <span className="purple">Projects!</span>
                    </figure>
                </h1>
            <div className="project__column--wrapper">
            <figure className="showcase__shell--left">
                <ul className="project__list">
                    <li className="project">
                        <div className="project__wrapper">
                            <img src={bookProjectPicture} className="project__img" alt=""></img>
                            <div className="project__wrapper--bg"></div>
                            <div className="project__description">
                                <h3 className="project__description--title">
                                    Online Book Store
                                </h3>
                                <h4 className="project__description--sub-title">
                                    Html, CSS, JavaScript, React
                                </h4>
                                <p className="project__description--para">
                                    This is my first holistic React project. I employed key best practices
                                    in frontend development using react, such as hooks, key array mapping methods,
                                    and routing using component and page jsx files.
                                </p>
                                <div className="project__description--links">
                                    <a href="#" className="project__description--link">
                                        <i><FontAwesomeIcon icon={['fab','github']}/></i>
                                    </a>
                                    <a href="#" className="project__description--link">
                                        <i><FontAwesomeIcon icon='link'/></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </figure>
            <figure className="showcase__shell--right">
                <ul className="project__list">
                    <li className="project">
                        <div className="project__wrapper">
                            <img src={eportProjectPicture} className="project__img" alt=""></img>
                            <div className="project__wrapper--bg"></div>
                            <div className="project__description">
                                <h3 className="project__description--title">
                                    Past Eportfolio
                                </h3>
                                <h4 className="project__description--sub-title">
                                    Html, CSS, JavaScript
                                </h4>
                                <p className="project__description--para">
                                    This was my first eportfolio. It does not consist of any
                                    React work, but it provided a basis for me to develop focuses
                                    of best practices as they relate to UI design, simplicity, and
                                    good use of CSS, HTML, and JS.
                                </p>
                                <div className="project__description--links">
                                    <a href="https://github.com/bchayss/bchayss.github.io" target="_blank" className="project__description--link">
                                        <i><FontAwesomeIcon icon={['fab','github']}/></i>
                                    </a>
                                    <a href="https://bchayss.github.io/" target="_blank" className="project__description--link">
                                        <i><FontAwesomeIcon icon='link'/></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="project">
                        <div className="project__wrapper">
                        <img src={constructionPic} className="project__img" alt=""></img>
                            <div class="project__wrapper--bg"></div>
                            <div class="project__description">
                                <h3 className="project__description--title">
                                    Work is in Progress
                                </h3>
                                <h4 className="project__description--sub-title">
                                    Html, CSS, JavaScript, React
                                </h4>
                                <p className="project__description--para">
                                    Currently Working on more Projects!
                                </p>
                                <div className="project__description--links">
                                    <a href="#" className="project__description--link">
                                        <i><FontAwesomeIcon icon={['fab','github']}/></i>
                                    </a>
                                    <a href="#" className="project__description--link">
                                        <i><FontAwesomeIcon icon='link'/></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </figure>
            </div>
            </div>
        )
}

export default Showcase
