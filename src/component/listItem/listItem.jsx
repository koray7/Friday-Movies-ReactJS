import './listItem.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddCircleIcon from '@mui/icons-material/AddCircle';


const ListItem = () => {
    return (
        <div className="listItem">
            <div className="movies">
                <img className="movies-img" src="https://assets-prd.ignimgs.com/2022/01/14/gameofthrones-allseasons-sq-1642120207458.jpg?width=300" alt="movie-img"/>
            </div>
            <div className="itemInfo">
                <div className="icons">
                    <PlayArrowIcon style={{ fontSize: 38 }}/>
                    
                    <AddCircleIcon style={{ fontSize: 38 }}/>
                    
                    <button>Button</button>
                </div>
            </div>
        </div>
    )
}

export default ListItem;