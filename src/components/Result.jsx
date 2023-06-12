export const Result = ({ onClickTryAgain, correct, questions }) => {
  return (
    <div className="result">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt="img"
      />
      <h2>
        You guessed {correct} answers from {questions.length}
      </h2>
      <button onClick={onClickTryAgain}>Try again</button>
    </div>
  )
}
