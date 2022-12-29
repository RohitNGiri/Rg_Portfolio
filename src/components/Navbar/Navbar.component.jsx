import React from "react";

import './Navbar.style.css';

const Navbar = () => {
    const header = document.querySelector("header");

    // sticky nav bar styling\

    function stickyNavbar() {
        // console.log("hello");
        header.classList.toggle("scrolled", window.pageYOffset > 0);
    }

    stickyNavbar();

    window.addEventListener("scroll", stickyNavbar);

    return (
        <div>
            <header>
                <nav className="container">
                    <a href="#" className="logo">
                        Portf<span>olio.</span>
                    </a>
                    <div className="links">
                        <ul>
                            <li>
                                <a href="#" className="nav-link">Home</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link">About</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link">SKILLS</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link">Projects</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link">Contact</a>
                            </li>


                        </ul>

                        <i className="uil uil-moon toggle-btn"></i>


                    </div>
                </nav>
            </header>

        </div>
    );
}


export default Navbar;



