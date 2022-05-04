import React from 'react'
import './main.css'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import InfoIcon from '@mui/icons-material/Info';

const Main = ({type}) => {
    return (
    <div className="main">

        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical ">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
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
                <PlayCircleIcon className="btn" size={150}/>
                <InfoIcon className="btn" size={150}/>
            </div>
        </div>
    </div>
    )
}

export default Main;