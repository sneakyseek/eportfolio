import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from 'react'
import emailjs from 'emailjs-com'
import '../index.css';
import{ init } from 'emailjs-com';
init("user_ahHZXKD3eVXplfTn7LCAZ");

const Contact = () => {
    emailjs.init("user_ahHZXKD3eVXplfTn7LCAZ")

    let isModalOpen = false;
    
    function toggleModal(){
        if(isModalOpen){
            isModalOpen = false;
            return document.body.classList.remove("modal--open");
        }
        isModalOpen = true;
        document.body.classList += " modal--open";
    }
    function exitModal(){
        document.body.classList.remove("modal--open");
    }
    function contact(e){
        e.preventDefault()
        const loading = document.querySelector('.modal__overlay--loading');
        const success = document.querySelector('.modal__overlay--success');
        loading.classList += " modal__overlay--visible";
    
        emailjs
            .sendForm(
                'service_xe9ulqm',
                'template_5r4ndid',
                e.target,
                'user_ahHZXKD3eVXplfTn7LCAZ'
            ).then(() => {
                loading.classList.remove("modal__overlay--visible");
                success.classList += " modal__overlay--visible";
            }).catch(() => {
                loading.classList.remove("modal__overlay--visible");
                alert(
                    "The email service is temporarily unavailable. Please contact me directly on bchayss@vt.edu"
                );
            })
    }
    return (
        <>
        <div>
             <button className="contact__button" onClick={toggleModal}>
                <i><FontAwesomeIcon icon="envelope"/></i>
            </button>
        </div>
        <div className="modal">
            <div className="modal__half modal__about">
                <h3 className="modal__title modal__title--about">Here's a bit about me.</h3>
                <h4 className="modal__sub-title modal__sub-title--about">Frontend Software Engineer</h4>
                <p className="modal__para">
                    I'm a 19 year-old <b className="secondary__color">frontend software engineer </b>
                    with a strong passion for developing asesthetic and performant websites that provide <b className="secondary__color">
                    wonderful user experiences.</b>
                    <br/><br/>
                    I currently work on creating more <b className="secondary__color">advanced implementations</b> of the frontend skills I have fostered, as
                    I learn alongside a group of equally <b className="secondary__color">talented</b> and <b className="secondary__color">experienced </b>
                    top tech frontend engineers, as I study <b className="secondary__color">Computer Science</b> at Virginia Tech
                </p>
                <div className="modal__languages">
                    <figure className="modal__language">
                        <img className="modal__language--img" src="https://www.w3.org/html/logo/downloads/HTML5_Badge_128.png" alt=""></img>
                        <span className="language__name">HTML</span>
                    </figure>
                    <figure className="modal__language">
                        <img className="modal__language--img" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png" alt=""></img>
                        <span className="language__name">CSS</span>
                    </figure>
                    <figure className="modal__language">
                        <img className="modal__language--img" src="https://iconape.com/wp-content/files/ez/353342/svg/javascript-seeklogo.com.svg" alt=""></img>
                        <span className="language__name">JavaScript</span>
                    </figure>
                    <figure className="modal__language">
                        <img className="modal__language--img" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-256.png" alt=""></img>
                        <span className="language__name">React</span>
                    </figure>
                    <figure className="modal__language">
                        <img className="modal__language--img" src="https://cdn0.iconfinder.com/data/icons/flat-round-system/512/java-256.png" alt=""></img>
                        <span className="language__name">Java</span>
                    </figure>
                    <figure className="modal__language">
                        <img className="modal__language--img" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-256.png" alt=""></img>
                        <span className="language__name">Python</span>
                    </figure>
                </div>
            </div>
            <div className="modal__half modal__contact">
                <FontAwesomeIcon icon='times' className="modal__exit click " onClick={() => exitModal()}/>
                <h3 className="modal__title modal__title--contact">
                    Let's have a chat!
                </h3>
                <h4 className="modal__sub-title modal__sub-title--contact">
                    I'd love to hear from you about how I can expand my experience!
                </h4>
                <form id="contact__form" onSubmit={contact}>
                    <div className="form__item">
                        <label className="form__item--label">Name</label>
                        <input className="input" name="user_name" type="text" required></input>
                    </div>
                    <div className="form__item">
                        <label className="form__item--label">E-mail</label>
                        <input className="input" name="user_email" type="email" required></input>
                    </div>
                    <div className="form__item">
                        <label className="form__item--label">Message</label>
                        <textarea className="input" name="message" type="text" required></textarea>
                    </div>
                    <button id="contact__submit" className="form__submit">
                        Send it my way
                    </button>
                </form>
                <div className="modal__overlay modal__overlay--loading">
                    <FontAwesomeIcon icon='spinner'></FontAwesomeIcon>
                </div>
                <div className="modal__overlay modal__overlay--success">
                    Thanks for the message! Looking forward to speaking to you soon.
                </div>
            </div>
        </div>
        </>
        
    )
}

export default Contact
export const toggleModal = () =>{
    
    let isModalOpen = false;
    
    if(isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    
    isModalOpen = true;
    document.body.classList += " modal--open";
}