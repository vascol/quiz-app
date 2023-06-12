export const Game = ({ question, onClickVariant, percentage }) => {
  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((obj, index) => (
          <li key={obj} onClick={() => onClickVariant(index)}>
            {obj}
          </li>
        ))}
      </ul>
    </>
  )
}
