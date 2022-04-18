import './list.css';
import ListItem from '../listItem/listItem';
import { useRef } from 'react'

const List = () => {

    const listRef = useRef()

    const handleClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 50
        if(direction === "left") {
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }
    }

    return (
        <div className="list">
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                <img 
                    className="sliderArrow left"
                    src="https://c8.alamy.com/zooms/9/ff1d005be9514206b7c744b74c7b4b58/2ap32wa.jpg"
                    alt="arrowR"
                    onClick={() => handleClick("left")}
                />

                <div className="container">
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
                    src="https://www.freeiconspng.com/thumbs/arrow-icon/big-left-arrow-icon-007358--icons-etc-15.png"
                    alt="arrowL"
                    onclick={() => handleClick("right")}
                />
            </div>
        </div>
    )
}

export default List;