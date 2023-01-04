import React from "react";

import './Projects.styles.css';
import port1 from '../../assets/port1.jpg';



const ProjectContainer = () => {

    return (
        <div className="sub-container">
            <h3 className="sub-heading prohead">&nbsp; Projects</h3>
            <section className="project-section">
                <div className="single-project">

                    <img src={port1} className='image1' />
                    <p className="project-data">
                        <h3>E - Commerce Site</h3>
                        Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adLorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    </p>
                </div>
                <div className="single-project">

                    <img src={port1} className='image1' />
                    <p className="project-data">
                        <h3>E - Commerce Site</h3>
                        Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adLorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    </p>
                </div> <div className="single-project">

                    <img src={port1} className='image1' />
                    <p className="project-data">
                        <h3>E - Commerce Site</h3>
                        Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adLorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    </p>
                </div>


            </section>

        </div>
    )
}


export default ProjectContainer;