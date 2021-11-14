import React from 'react'
import backgroundImage from "../assets/backgroundBall.png"
import backgroundTriangle from "../assets/triangle.svg"


const BackgroundEvent = () => {


    const scaleFactor = 1 / 20;
    function moveBackground(e){
        const shapes = document.querySelectorAll(".background__ball");
        const x = e.clientX * scaleFactor;
        const y = e.clientY * scaleFactor;
    
        for(let i = 0; i< shapes.length; ++i){
            const isOdd = i % 2 !== 0;
            const boolInt = isOdd ? -1 : 1;
            shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
        }
    }
    document.addEventListener('mousemove', moveBackground);
    document.onmousemove = (moveBackground);


    return (
        
        <div className="background__event">
            <img src={backgroundImage} alt="" className="background__ball ball--0" />
            <img src={backgroundTriangle} alt="" className="background__ball ball--1" />
            <img src={backgroundImage} alt="" className="background__ball ball--2" />
            <img src={backgroundTriangle} alt="" className="background__ball ball--3" />
            <img src={backgroundImage} alt="" className="background__ball ball--4" />
            <img src={backgroundTriangle} alt="" className="background__ball ball--5" />
            <img src={backgroundImage} alt="" className="background__ball ball--6" />
            <img src={backgroundTriangle} alt="" className="background__ball ball--7" />
            <img src={backgroundImage} alt="" className="background__ball ball--8" />
        </div>
    )
}

export default BackgroundEvent
