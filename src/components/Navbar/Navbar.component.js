import React, { useEffect, useState } from 'react';


import './Navbar.style.css';

const Navbar = () => {


    function MyApp() {
        console.log('sf');
        const [offset, setOffset] = useState(0);

        useEffect(() => {
            const onScroll = () => setOffset(window.pageYOffset);
            // clean up code
            window.removeEventListener('scroll', onScroll);
            window.addEventListener('scroll', onScroll, { passive: true });
            return () => window.removeEventListener('scroll', onScroll);
        }, []);

        console.log(offset);
    };

    return (
        <div onScroll={MyApp} >
            <header id="stickyHeader">
                <div className="navbar">
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
                </div>
            </header>

        </div>
    );
}


export default Navbar;



