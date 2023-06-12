import React from "react"
import { Game } from "./components/Game"
import { Result } from "./components/Result"

import "./index.scss"

const questions = [
  {
    title: "React - is ... ?",
    variants: ["library", "framework", "application"],
    correct: 0,
  },
  {
    title: "Component - is ... ",
    variants: [
      "application",
      "part of an application or page",
      "what I don't know what is",
    ],
    correct: 1,
  },
  {
    title: "What is JSX?",
    variants: [
      "This is plain HTML",
      "This is a function",
      "This is the same HTML, but with the ability to execute JS code",
    ],
    correct: 2,
  },
]

const App = () => {
  const [step, setStep] = React.useState(0)
  const [correct, setCorrect] = React.useState(0)

  const question = questions[step]

  const onClickVariant = (index) => {
    setStep(step + 1)
    if (index === question.correct) {
      setCorrect(correct + 1)
    }
  }

  const percentage = Math.round((step / questions.length) * 100)

  const onClickTryAgain = () => {
    setStep(0)
    setCorrect(0)
  }

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game
          question={question}
          onClickVariant={onClickVariant}
          step={step}
          percentage={percentage}
        />
      ) : (
        <Result
          onClickTryAgain={onClickTryAgain}
          correct={correct}
          questions={questions}
        />
      )}
    </div>
  )
}

export default App
