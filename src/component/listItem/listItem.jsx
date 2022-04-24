import './listItem.css'

const ListItem = () => {
    return (
        <div className="listItem">
            <img className="movies-img" src="https://assets-prd.ignimgs.com/2022/01/14/gameofthrones-allseasons-sq-1642120207458.jpg?width=300" alt="movie-img"/>
            <div className="itemInfo">
                <div className="icons">
                    <img className="movies-icon" src="https://cdn-icons-png.flaticon.com/512/1362/1362985.png" alt="play-icon"/>
                    <img className="movies-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlLixtfbLjAS0QmRmcjY9d6o8xwGzRGEhhjTH1tN5gIcUTJUSTIDcRJPALLOeAGrRdnkM&usqp=CAU" alt="add-icon"/>
                    <img className="movies-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Facebook_Thumb_icon.svg/640px-Facebook_Thumb_icon.svg.png" alt="play-icon"/>
                    <img className="movies-icon" src="https://media.pocketnow.com/styles/large/public/2019/02/YouTube-dislike-button.jpg?itok=dbcQU5bm" alt="play-icon"/>
                    <button>Button</button>
                </div>
            </div>
        </div>
    )
}

export default ListItem;