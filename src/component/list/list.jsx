import './list.css';
import ListItem from '../listItem/listItem';
import { useRef, useState } from 'react'

const List = () => {
    
    const [isMoved, setIsMoved] = useState(false)
    const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef()

    const handleClick = (direction) => {
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x
        if(direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${150 + distance}px)`
        }
        if(direction === "right" && slideNumber < 5) {
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${-300 + distance}px)`
        }
    }

    return (
        <div className="list">
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                <img 
                    className="sliderArrow left"
                    src="https://www.freeiconspng.com/thumbs/arrow-icon/big-left-arrow-icon-007358--icons-etc-15.png"
                    alt="arrowR"
                    onClick={() => handleClick("left")}
                    style={{display: !isMoved && "none"}}
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
                
                <img 
                    className="sliderArrow right"
                    src="https://c8.alamy.com/zooms/9/ff1d005be9514206b7c744b74c7b4b58/2ap32wa.jpg"
                    alt="arrowL"
                    onClick={() => handleClick("right")}
                />
            </div>
        </div>
    )
}

export default List;