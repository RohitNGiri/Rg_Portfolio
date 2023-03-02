import React from "react";
import { useRef,useEffect } from "react";

import './Skills.styles.css';

const Skills = () => {
    
    // const handleSkills = (e) => {
       
    //     console.log(e.rohit);

    // }

    // window.addEventListener('scroll',()=>{
    //     let rg = window.pageYOffset;
    //     if( rg > 1800){


    //         console.log(rg);
    //     }
    // })

    // function onChangeHandler(){
    //     let divPosition = getBoundingClientRect();
    //     console.log(divPosition);
    // }
     const inputRef = useRef();
    const scrollHandler = _ => {
    console.log(inputRef.current.getBoundingClientRect());
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, true);
    return () => {
      window.removeEventListener("scroll", scrollHandler, true);
    };
  }, []);

    return (
        <div>
            <section className="skills section">
                <div className="container">
                    <div className="skills-box" ref={inputRef} >
                    <h3 className="sub-heading align-heading">&nbsp; My skills</h3>
                        <div className="box-heading">

                            <div className="box-desc">
                                <h1 className="heading"> Let me help you</h1>
                                <p className="text">
                                    <a href="" className="btn"> Hire me</a>
                                </p>

                            </div>
                        </div>
                        <div className="skills-wrap">
                            <div className="skill" on>
                                <div className="sk-progress">
                                    <svg>

                                        <circle cx="75" cy="75" r="68" />
                                    </svg>
                                    <h2 className="counter">
                                        <span data-target="89">0</span>%
                                    </h2>
                                </div>
                                <div className="sk-title">HTML</div>
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
                                <div className="sk-title">CSS</div>
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
                                <div className="sk-title">JavaScript</div>
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
                                <div className="sk-title">ReactJS</div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default Skills;