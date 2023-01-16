import React, { useEffect, useState } from 'react';


import './Navbar.style.css';

const Navbar = () => {
    
    const [scroll , setScroll] = useState(false);
    
    const handleScroll = () => {
        
        // console.log(window.pageYOffset > 0);
        if(window.pageYOffset > 0){
        setScroll(true);
        }
        else{
            setScroll(false)
        }
        
}


    return (
        <div  onScroll={window.addEventListener('scroll', handleScroll)} >
            <header className={scroll ? 'stickyHeader': null }>
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



