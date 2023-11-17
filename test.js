async function pullTrivia(){
    const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
    const data = await res.json()
    console.log(data.results)
}
pullTrivia()

/*
{
    category: 'Entertainment: Film',
    type: 'multiple',
    difficulty: 'medium',
    question: 'What is the name of the foley artist who designed the famous sounds of Star Wars, including Chewbacca&#039;s roar and R2-D2&#039;s beeps and whistles?',
    correct_answer: 'Ben Burtt',
    incorrect_answers: [ 'Ken Burns', 'Ralph McQuarrie', 'Miranda Keyes' ]
  }
  
*/