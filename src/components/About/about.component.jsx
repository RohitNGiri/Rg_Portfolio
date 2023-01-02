import React from "react";
import './about.styles.css';

const AboutSection = () => {

    return (
        <div>
            <section className="about section">
                <img src="./assets/triangle.png" className="shape triangle" alt="" />
                <div className="container">
                    <div className="about-grid">
                        <div className="about-card">
                            <h3>User Testing</h3>
                        </div>
                        <div className="about-card">
                            <h3>Prototyping</h3>
                        </div>

                    </div>
                    <div className="about-info">
                        <h3 className="sub-heading">About me</h3>
                        <h1 className="heading">Hello, I am Rohit Giri</h1>
                        <p className="text">I graduated from the Amravati University in 2022 with a degree in <a>Bachelor of Computer
                            Application (BCA).</a><br />
                            Through out that, I have some experience skills in <a>Html, CSS, Bootstrap, JavaScript, Jquery, ReactJS, NodeJS and Database like MongoDb, Firebase. </a> I am not only
                            good at
                            frontend
                            dvelopment, But
                            also i have good graps on back-end technologies like <a> C language, C++, Core Java and Python.</a> <br />
                            I have completed some projects using MERN stack and learn How to work on live projects and host them using <a>Github & Netlify. </a>
                            Also I am exploring deep into upcomming Web Technologies like <a>
                                NextJS, VueJS, and so on.

                            </a>
                        </p>
                        <div className="cta">
                            <a href="mailto:rohitgirirg7027@gmail.com" className="btn">Contact Me</a>
                            <a href="rgcv.pdf" download className="btn secondary-btn">Download CV</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutSection;