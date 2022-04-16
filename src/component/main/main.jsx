import React from 'react'
import './main.css'

const Main = () => {
    return (
    <div className="main">
        <div className="info">
            <img 
                className="movie"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpYyualeC5paFx3kEoCr2i97qP0HydnT2Jtw&usqp=CAU"
                alt="movie-img"
            />
            <span className="desc">
            Alanya is a resort town on Turkey’s central Mediterranean coast (also known as the Turkish Riviera). Its wide beaches lined with hotels include Cleopatra Beach, where the Egyptian queen reputedly swam. Alanya Castle, a giant Seljuk-era fort turned open-air museum, stands on a rocky bluff above the beachfront, alongside red tile–roofed Ottoman villas and the octagonal Red T
            </span> 
            <div className="buttons">
                <button className="btn">Play</button>
                <button className="btn">Info</button>
            </div>
        </div>
    </div>
    )
}

export default Main;