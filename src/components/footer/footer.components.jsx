import React from "react";

import './footer.styles.css';
import rg from '../../assets/forFooter/rg.png';
import signature from '../../assets/forFooter/signature.png';


const Footer = () => (
    <div>
        <div className="container">
            <hr />
            <p className="d-inline-flex  ">
                <b>No <i className="fa fa-copyright"></i> copyright issues.</b>
            </p><br />
            <p>
                All rights reserved. If you need any help, ping me !
            </p>
            <br />
            <div className="rg" id="social1">
                <p className="nav d-flex flex-row-reverse">
                    You can find me everywhere
                </p>

                <ul className="nav d-flex flex-row-reverse">
                    <a target="_blank" href="mailto:rohitgirirg7027@gmail.com" title="Email Me"><li ><i className="fa-solid fa-envelope p-2 fa-3x"></i></li> </a>
                    <a target="_blank" href="https://www.instagram.com/this.rohitgiri/" title="Check Out My Insta"><li><i className="fa-brands fa-square-instagram p-2 fa-3x"></i></li></a>
                    <a target="_blank" href="https://www.linkedin.com/in/rohit-giri-5508101b7/" title="Connect me on LinkIn"><li><i className="fa-brands fa-linkedin p-2 fa-3x"></i></li></a>
                    <a target="_blank" href="https://github.com/RohitNGiri?tab=repositories" title="Let's Contribute on Github"><li><i className="fa-brands fa-square-github p-2 fa-3x"></i></li></a>
                </ul>
            </div>

            <div className="text-center">
                <p>Thanks to React  <i class="fa fa-heart"></i> <br />Signing Out</p>
            </div>

            <div className="text-center">
                <img className='img1' src={signature} alt="Rg" />
            </div>
            <div className="text-center">
                <img className="footimg img2 text-center d-flex" src={rg} />
            </div>

        </div>
        {/* <p className="box-bottom"></p> */}

    </div>
)


export default Footer;



