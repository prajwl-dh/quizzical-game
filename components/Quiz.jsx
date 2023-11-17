import React from "react"
import yellowIcon from "../images/yellowIcon.png"
import blueIcon from "../images/blueIcon.png"

export default function Quiz(props){
    return(
        <div className="quiz-container">
            <img src={yellowIcon} className="yellowIcon" />
            <ul className="quiz-list">
                <li>
                    <p className="questions">{props.question}</p>
                    <div className="all-buttons">
                        <button className="answer-buttons">adios</button>
                        <button className="answer-buttons">hola</button>
                        <button className="answer-buttons">au revior</button>
                        <button className="answer-buttons">salir</button>
                    </div>
                    <hr className="line" />
                </li>
            </ul>
            <img src={blueIcon} className="blueIcon" />
        </div>
    )
}