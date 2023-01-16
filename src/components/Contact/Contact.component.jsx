import React, { useState } from "react";

import './Contact.styles.css';
import { FaLocationArrow } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import gif1 from '../../assets/gif1.gif';


const Contact = () => {
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        setError(true);
    }

    return (
        <div className="container">
            <h3 className="sub-heading">&nbsp; Contact</h3>
            <section class="paralax-mf footer-paralax bg-image sect-mt4 route" >
                <div class="overlay-mf"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="contact-mf">
                                <div id="contact" class="box-shadow-full">
                                    <h1 class="heading">
                                        Get in Touch
                                    </h1><br />
                                    <div class="row">

                                        <div class="col-md-6">
                                            <div class="title-box-2 pt-4 pt-md-0">

                                            </div>
                                            <div class="more-info">
                                                <p class="lead">
                                                    Hello Everyone! Have a great day :) I am here to help you. If you want to know something or you have any suggestion then please mail me. Thank You.
                                                </p><br />
                                                <br /><br /><br /><br />
                                                <ul class="list-ico">
                                                    <li><FaLocationArrow /> &nbsp;<span class="ion-ios-location"></span> Yavatmal, Maharashtra, India</li><br />
                                                    <li><BsFillTelephoneFill /> &nbsp;<span class="ion-ios-telephone"></span> +91 7378719124</li><br />
                                                    <li><AiOutlineMail /> &nbsp;<span class="ion-email"></span>rohitgirirg7027@gmail.com</li><br />
                                                </ul>
                                            </div>
                                            <div class="socials">
                                                <ul>
                                                    <li><a href="https://www.facebook.com/nikhilfalke.11/" target="_blank"><span class="ico-circle"><i class="ion-social-facebook"></i></span></a></li>
                                                    <li><a href="https://www.instagram.com/black_wolf__15/" target="_blank"><span class="ico-circle"><i class="ion-social-instagram"></i></span></a></li>
                                                    <li><a href="https://github.com/Nikhil-2002" target="_blank"><span class="ico-circle"><i class="ion-social-github"></i></span></a></li>
                                                    <li><a href="https://www.linkedin.com/in/nikhil-falke-1a3639200/" target="_blank"><span class="ico-circle"><i class="ion-social-linkedin"></i></span></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="title-box-2">

                                            </div>
                                            <div>
                                                {error && <div className="succmessage">Your Message as been sent Successfully! <img src={gif1} /></div>}
                                                <form action="" onSubmit={handleChange} className={`${error ? 'error' : 'contactForm'}`} role="form">

                                                    <div id="errormessage"></div>
                                                    <div class="row">
                                                        <div class="col-md-12 mb-3">
                                                            <div class="form-group">
                                                                <input type="text" name="name" required class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                                                <div class="validation"></div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12 mb-3">
                                                            <div class="form-group">
                                                                <input type="email" required class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                                                <div class="validation"></div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12 mb-3">
                                                            <div class="form-group">
                                                                <input type="text" required class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                                                <div class="validation"></div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12 mb-3">
                                                            <div class="form-group">
                                                                <textarea class="form-control" required name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                                                <div class="validation"></div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12"><br />
                                                            <button type="submit" class="btn btnhover">Send Message</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}


export default Contact;