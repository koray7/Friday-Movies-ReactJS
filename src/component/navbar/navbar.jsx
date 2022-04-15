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
                
                <div className="right">
                    <img 
                        className="logo"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu6GUuqAUrdzpX9P5kgk0OQ4lpMNACqyqSZla13QZyz5-VT6kClv_s45tNAjW8n3k3ykQ&usqp=CAU"
                        alt="Search-icon"
                    />

                    <span>KID</span>
                    <img 
                        className="logo"
                        src="https://cdn-icons-png.flaticon.com/512/1592/1592461.png"
                        alt="Notification-icon"
                    />
                    <img 
                        className="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/768px-User_icon_2.svg.png"
                        alt="user-icon"
                    />
                    <div className="profile">
                        <img 
                            className="logo"
                            src="https://icon-library.com/images/red_arrow_down-512.png"
                            alt="arrowdown-icon"
                        />
                        <div className="options">
                            <span>Settings</span>
                            <span>Login</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar;