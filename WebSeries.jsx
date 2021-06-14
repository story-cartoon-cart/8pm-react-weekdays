import React from 'react';
import './Style.css'


function WebSeries(props)

{
    console.log(props);
    return(

        <div className="cards">
        <div className="card">
            <img src={props.imgsource} alt="mypic" className="card_img" />
        <div className="card_info">
        <span className="card_category">{props.category}</span>
        <h3 className="card_title">{props.title}</h3>
        <a href={props.link} target="_blank">
            <button>Watch Now</button>
        </a>

        </div>
        </div>
    </div>

    )
}


export default WebSeries;