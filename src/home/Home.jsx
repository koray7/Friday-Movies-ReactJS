import './Home.css'
import Navbar from '../component/navbar/navbar'
import Main from '../component/main/main'
import List from '../component/list/list'



const Home = () => {
    
    return (

        <div className="home">
                <Navbar />
                <Main type="movie"/>
                <div className="listOfMovies">
                    <List />
                    <List />
                    <List />
                    <List />
                </div>
        </div>
    )
}

export default Home;