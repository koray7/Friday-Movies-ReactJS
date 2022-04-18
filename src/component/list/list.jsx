import './list.css'
import ListItem from '../listItem/listItem'

const list = () => {
    return (
        <div className="list">
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                <img 
                    className="sliderArrow left"
                    src="https://c8.alamy.com/zooms/9/ff1d005be9514206b7c744b74c7b4b58/2ap32wa.jpg"
                    alt="arrowR"
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
                />
            </div>
        </div>
    )
}

export default list;