import React from "react";

import './Projects.styles.css';
import port1 from '../../assets/port1.jpg';



const ProjectContainer = () => {

    return (
        <div className="sub-container">
        <br/>
        <br/>
        <br/>
            <h3 className="sub-heading align-heading-project">&nbsp; Projects</h3>
            <br/>
            <section className="project-section">
                 <div className="single-project">

                    <img src={port1} className='image1' />
                    <p className="project-data">
                        <h4>E - Commerce Site</h4>
                   
                        <div className="demo-btns" >
                       
                            <button className="simple-btn">Live Demo</button>
                            <button className="simple-btn">Source Code</button>
                        </div>
                    </p>
                </div>
                 <div className="single-project">

                    <img src={port1} className='image1' />
                    <p className="project-data">
                        <h4>E - Commerce Site</h4>
                   
                        <div className="demo-btns" >
                       
                            <button className="simple-btn">Live Demo</button>
                            <button className="simple-btn">Source Code</button>
                        </div>
                    </p>
                </div>
                 <div className="single-project">

                    <img src={port1} className='image1' />
                    <p className="project-data">
                        <h4>E - Commerce Site</h4>
                   
                        <div className="demo-btns" >
                       
                            <button className="simple-btn">Live Demo</button>
                            <button className="simple-btn">Source Code</button>
                        </div>
                    </p>
                </div>


            </section>

          

        </div>
    )
}


export default ProjectContainer;