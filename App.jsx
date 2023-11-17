import React from "react"
import { v4 as uuidv4 } from 'uuid';
import Home from "./components/Home.jsx"
import Quiz from "./components/Quiz.jsx"


export default function App(){
    const [startQuiz, setStartQuiz] = React.useState(false)
    const [trivia, setTrivia] = React.useState([])

    React.useEffect(() => {
        async function pullTrivia(){
            const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            const data = await res.json()
            setTrivia(data.results)
        }
        pullTrivia()
    }, [])

    function onStartQuizButton(){
        setStartQuiz(true)
    }

    // Decode HTML entities function
    function decodeHtml(html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }

    const questions = trivia.map((x) => <Quiz key={uuidv4()} question={decodeHtml(x.question)}/>)

    return(
        <div className="app">
            {startQuiz ? questions : <Home buttonClick={onStartQuizButton}/>}
            {startQuiz ? <button className="checkAnswerButton">Check answers</button> : null}
        </div>
    )
}