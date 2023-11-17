import React from "react"
import yellowIcon from "../images/yellowIcon.png"
import blueIcon from "../images/blueIcon.png"

export default function Home(props){
    return(
        <div className="home-container">
            <img src={yellowIcon} className="yellowIcon" />
            <div className="home-content">
                <h1 className="home-content-heading">Quizzical - by Prajwal</h1>
                <h5 className="home-content-description">Welcome to quizzical. Lets test your general knowledge!</h5>
                <button className="startButton" onClick={props.buttonClick}>Start quiz</button>
            </div>
            <img src={blueIcon} className="blueIcon" />
        </div>
    )
}