import React from "react";

import './Skills.styles.css';

const Skills = () => {

    return (
        <div>
            <section className="skills section">
                <div className="container">
                    <div className="skills-box">
                        <div className="box-heading">
                            <h3 className="sub-heading">My skills</h3>

                            <div className="box-desc">
                                <h1 className="heading"> Let me help you</h1>
                                <p className="text">
                                    <a href="" className="btn"> Hire me</a>
                                </p>

                            </div>
                        </div>
                        <div className="skills-wrap">
                            <div className="skill">
                                <div className="sk-progress">
                                    <svg>

                                        <circle cx="75" cy="75" r="68" />
                                    </svg>
                                    <h2 className="counter">
                                        <span data-target="89">0</span>%
                                    </h2>
                                </div>
                                <div className="sk-title">ReactJS</div>
                            </div>

                            <div className="skill">
                                <div className="sk-progress">
                                    <svg>

                                        <circle cx="75" cy="75" r="68" />
                                    </svg>
                                    <h2 className="counter">
                                        <span data-target="68">0</span>%
                                    </h2>
                                </div>
                                <div className="sk-title">JavaScript</div>
                            </div>


                            <div className="skill">
                                <div className="sk-progress">
                                    <svg>

                                        <circle cx="75" cy="75" r="68" />
                                    </svg>
                                    <h2 className="counter">
                                        <span data-target="82">0</span>%
                                    </h2>
                                </div>
                                <div className="sk-title">MongoDb</div>
                            </div>



                            <div className="skill">
                                <div className="sk-progress">
                                    <svg>

                                        <circle cx="75" cy="75" r="68" />
                                    </svg>
                                    <h2 className="counter">
                                        <span data-target="80">0</span>%
                                    </h2>
                                </div>
                                <div className="sk-title">HTML/CSS</div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default Skills;