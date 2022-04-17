import React from 'react'
import './main.css'

const Main = () => {
    return (
    <div className="main">
        <div className="info">
            <img 
                className="movie"
                src="https://gumlet.assettype.com/freepressjournal/2021-11/73de02ef-cd36-47d8-bbae-528d01dc6fe4/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg?format=webp&w=400&dpr=2.6"
                alt="movie-img"
            />
            <span className="desc">
            Neo (Keanu Reeves) believes that Morpheus (Laurence Fishburne), an elusive figure considered to be the most dangerous man alive, can answer his question -- What is the Matrix? Neo is contacted by Trinity (Carrie-Anne Moss), a beautiful stranger who leads him into an underworld where he meets Morpheus. They fight a brutal battle for their lives against a cadre of viciously intelligent secret agents. It is a truth that could cost Neo something more precious than his life.
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