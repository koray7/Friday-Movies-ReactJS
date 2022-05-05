import './list.css';
import ListItem from '../listItem/listItem';
import { useRef, useState } from 'react'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';


const List = () => {
    
    const [isMoved, setIsMoved] = useState(false)
    const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef()

    const handleClick = (direction) => {
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x - 50
        if(direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${300 + distance}px)`
        }
        if(direction === "right" && slideNumber < 5) {
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${-285 + distance}px)`
        }
    }

    return (
        <div className="list">
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">

            <KeyboardDoubleArrowLeftIcon
                    className="sliderArrow left"
                    onClick={() => handleClick("left")}
                    style={{display: !isMoved && "none", width: 50, height: 50}}
                    
            />

                <div className="container" ref={listRef}>
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </div>
                
                <KeyboardDoubleArrowRightIcon
                    className="sliderArrow right"
                    alt="arrowL"
                    onClick={() => handleClick("right")}
                    style={{ width: 50, height: 50 }}
                />
            </div>
        </div>
    )
}

export default List;