import React from "react"
import { v4 as uuidv4 } from 'uuid';
import Home from "./components/Home.jsx"
import Quiz from "./components/Quiz.jsx"
import {triviaSource} from "./data.js";


export default function App(){
    const [startQuiz, setStartQuiz] = React.useState(false)
    const [trivia, setTrivia] = React.useState(triviaSource)

    /*
    React.useEffect(() => {
        async function pullTrivia(){
            const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            const data = await res.json()
            setTrivia(data.results)
        }
        pullTrivia()
    }, [])
    */

    function onStartQuizButton(){
        setStartQuiz(true)
    }

    // Decode HTML entities function
    function decodeHtml(html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }

    function onQuizOptionsClick(id, quizNumber){
        console.log("Clicked " + " quiz number " + quizNumber + " with " + id)
    }

    let quizIndex = 0
    const questions = trivia.map((x) => {
        quizIndex = quizIndex + 1
        return <Quiz key={quizIndex} quizNumber={quizIndex} question={decodeHtml(x.question)} options={x.incorrect_answers} correctAnswer={x.correct_answer} click={onQuizOptionsClick}/>
    })

    return(
        <div className="app">
            {startQuiz ? questions : <Home buttonClick={onStartQuizButton}/>}
            {startQuiz ? <button className="checkAnswerButton">Check answers</button> : null}
        </div>
    )
}
