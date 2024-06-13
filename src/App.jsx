import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

const questions = [
  {
    question: '¿Qué lenguaje se ejecuta en un navegador web?',
    answers: ['Java', 'C', 'Python', 'JavaScript'],
    correct: 'JavaScript'
  },
  {
    question: '¿Qué lenguaje se ejecuta en un navegador web?',
    answers: ['Java', 'C', 'Python', 'JavaScript'],
    correct: 'JavaScript'
  },
  {
    question: '¿Qué lenguaje se ejecuta en un navegador web?',
    answers: ['Java', 'C', 'Python', 'JavaScript'],
    correct: 'JavaScript'
  },
  {
    question: '¿Qué lenguaje se ejecuta en un navegador web?',
    answers: ['Java', 'C', 'Python', 'JavaScript'],
    correct: 'JavaScript'
  },
]

function App() {
  const [count, setCount] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };
  const handleSubmit = () => {
    if (selectedAnswer) {
      if (selectedAnswer === questions[currentQuestion].correct) {
        setScore(score + 1);
      }

      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer('');
      } else {
        setShowScore(true);
      }
    }
  };
  return (
    <>
      <div class="quiz-container" id="quiz">
    <div class="quiz-header">
      <h2 id="question">Texto pregunta</h2>
      <ul>
        <li>
          <input type="radio" name="answer" id="a" class="answer"/>
          <label for="a" id="a_text">Opción</label>
        </li>

        <li>
          <input type="radio" name="answer" id="b" class="answer"/>
          <label for="b" id="b_text">Opción</label>
        </li>

        <li>
          <input type="radio" name="answer" id="c" class="answer"/>
          <label for="c" id="c_text">Opción</label>
        </li>

        <li>
          <input type="radio" name="answer" id="d" class="answer"/>
          <label for="d" id="d_text">Opción</label>
        </li>
      </ul>
    </div>
    <button id="submit">Enviar</button>
  </div>
  <div id="toasts"></div>
    </>
  )
}

export default App
