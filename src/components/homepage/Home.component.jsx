import React from "react";

import './Home.styles.css';
import circle1 from '../../assets/circle1.png';
import dots1 from '../../assets/dots.png';
import rg from '../../assets/person1.png'



const Home = () => {
    return (
        <div>
            <section class="showcase-area">
                <div class="container">
                    <div class="showcase-info">

                        <h3 class="sub-heading"> Web Developer</h3>
                        <h1 class="heading">Rohit Giri</h1>
                        <p class="text">I am a front-end Web Developer. Let's Work Together.</p>
                        <div class="cta">
                            <a href="mailto:rohitgirirg7027@gmail.com" class="btn rohit">Contact Me</a>
                            <a href="rgcv.pdf" download class="btn secondary-btn">Download CV</a>
                        </div>
                    </div>

                    <div class="showcase-image">
                        <img src={rg} class="person" alt="Rohit" />
                        <img src={circle1} class="shape circle" alt="" />
                        <img src={dots1} class="shape dots" alt="" />

                    </div>
                </div>
            </section>
        </div>

    );
}


export default Home;