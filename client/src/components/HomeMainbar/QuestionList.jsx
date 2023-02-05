import React from 'react'
import Questions from './Questions'

const QuestionList = ({questionsList}) => {
    console.log(QuestionList);
    return (
        <>
            {
                questionsList?.map((question) => (
                    <Questions question={question}/>
                ))
            }
        </>
    )
}

export default QuestionList