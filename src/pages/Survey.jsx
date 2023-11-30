import React from 'react'
import { useParams, Link } from 'react-router-dom'

function Survey() {
  const { questionNumber } = useParams()

  const questionNumberInt = parseInt(questionNumber)
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1

  return (
    <div>
      <h1>Questionnaire</h1>
      <h2>Question {questionNumber}</h2>

      <div>
        <Link to={`/survey/${prevQuestionNumber}`}>Precedent</Link>
        {questionNumberInt === 10 ? (
          <Link to={'/results'}>Resultats</Link>
        ) : (
          <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
        )}
      </div>
    </div>
  )
}

export default Survey
