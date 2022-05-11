import React, { useState } from "react";
import "./navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsPausedIcon from '@mui/icons-material/NotificationsPaused';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


const Navbar = () => {

    const [scrolled, setScrolled] = useState(false)


    window.onscroll = () => {
        setScrolled(window.pageYOffset === 0 ? false : true);
        return() => (window.onscroll = null);
    }
    return (
        <div className={scrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img 
                        className="logo"
                        src="https://images.squarespace-cdn.com/content/v1/530d6a45e4b0c1e0df748ac2/c851b10a-379c-4786-8376-a9f05ab4200d/movienight-3.jpg" 
                        alt="Friday-logo"
                    />
                    <span className="navbar-text">HomePage</span>
                    <span className="navbar-text">Series</span>
                    <span className="navbar-text">Movies</span>
                    <span className="navbar-text">New and Popular</span>
                    <span className="navbar-text">My List</span>
                </div>
                
                <div className="right">

                    {/* <SearchIcon className="nav-icon" style={{ fontSize: 38 }}/>
                    <span className="kid">KID</span>
                    <NotificationsPausedIcon className="nav-icon" style={{ fontSize: 38 }}/>
                    <PersonAddAltIcon className="nav-icon" style={{ fontSize: 38 }}/>
                    <ArrowDownwardIcon className="dropdown-arrow" style={{ fontSize: 38 }}/>
                    
                    <div className="profile">
                        <div className="options">
                                <span className="dropdown">Settings</span>
                                <span className="dropdown">Login</span>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar;