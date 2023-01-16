import React from "react";

import './about.styles.css';
import reactjs from '../../assets/MERN/react-1.svg';
import expressjs from '../../assets/MERN/express-109.svg';
import nodejs from '../../assets/MERN/nodejs-icon.svg';
import mongodb from '../../assets/MERN/mongodb-icon-1.svg';

const AboutSection = () => {

  
 

    return (
        <div >
            <section className="about section">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-card">
                            <img src={mongodb} />
                            <h3>HTML</h3>
                        </div>
                        <div className="about-card">
                            <img src={expressjs} />
                            <h3>CSS</h3>
                        </div>
                        <div className="about-card">
                            <img src={nodejs} />
                            <h3>ReactJS</h3>
                        </div>
                        <div className="about-card">
                            <img src={reactjs} />
                            <h3>JavaScript</h3>
                        </div>

                    </div>
                    <div className="about-info">
                        <h3 className="sub-heading">&nbsp; About me</h3>
                        <br />
                        <h1 className="heading">Hello, I am Rohit Giri</h1>
                        <p className="text">I graduated from the Amravati University in 2022 with a degree in <b>Bachelor of Computer
                            Application (BCA).</b><br />
                            Through out that, I have some experience skills in <b>Html, CSS, Bootstrap, JavaScript, ReactJS, NodeJS, TypeScript and Database like Firebase, MySQL. </b> I am not only
                            good at
                            Frontend
                            dvelopment, But
                            also i have deep understanding of 
                           
                         <b> Webpack, performance optimization, and Progressive Web Apps.</b> <br />
                            I have completed some projects like<b> E-commerce website, Job Tracking & Video Streaming App </b>, Where I learn How to work on live projects and host them using <b>Github & Netlify. </b>
                            I am constantly seeking to <b>learn and stay up-to-date</b> with the latest trends and technologies in the industry.

                            </p>
                        <div className="cta">
                            <a href="mailto:rohitgirirg7027@gmail.com" className="btn rohit">Contact Me</a>
                            <a href="rgcv.pdf" download className="btn secondary-btn">Download CV</a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default AboutSection;