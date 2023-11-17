import React from "react"
import yellowIcon from "../images/yellowIcon.png"
import blueIcon from "../images/blueIcon.png"

export default function Quiz(props){
    // Decode HTML entities function
    function decodeHtml(html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }

    const tempArray = props.options
    tempArray.push(props.correctAnswer)
    tempArray.sort(() => Math.random() - 0.5)

    const finalOptionsArray = tempArray.map((x) => <button className="answer-buttons">{decodeHtml(x)}</button>)

    return(
        <div className="quiz-container">
            <img src={yellowIcon} className="yellowIcon" />
            <ul className="quiz-list">
                <li>
                    <p className="questions">{props.question}</p>
                    <div className="all-buttons">
                        {finalOptionsArray}
                    </div>
                    <hr className="line" />
                </li>
            </ul>
            <img src={blueIcon} className="blueIcon" />
        </div>
    )
}