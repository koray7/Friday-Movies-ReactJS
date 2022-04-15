import React from "react";
import "./navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="left">
                    <img 
                        className="logo"
                        src="https://images.squarespace-cdn.com/content/v1/530d6a45e4b0c1e0df748ac2/c851b10a-379c-4786-8376-a9f05ab4200d/movienight-3.jpg" 
                        alt="Friday-logo"
                    />
                    <span>Home-Page</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                
                <div className="right"></div>

            </div>
        </div>
    )
}

export default Navbar;