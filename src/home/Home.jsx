import './Home.css'
import Navbar from '../component/navbar/navbar'
import Main from '../component/main/main'

const Home = () => {
    
    return (

        <div className="home">
                <Navbar />
                <Main type="movie"/>
        </div>
    )
}

export default Home;