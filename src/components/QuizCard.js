import React, { useState } from 'react';
import './QuizCard.css';
import { quiz } from '../services/questions-array';
import { Link } from 'react-router-dom';
let QuizCard = ({ getUserChoices }) => {

    const [activeQuestion, setActiveQuestion] = useState(0)
    const onClickNext = () => {
        setActiveQuestion((index) => index + 1)
    }
    const onClicPrevious = () => {
        setActiveQuestion((index) => index - 1)
    }

    return <>
        <div className='card-container'>
            <div className='card-wrapper'>
                <h1>{quiz[activeQuestion].question}</h1>
                <div className='answers-box'>
                    <ul className='answers'>
                        {quiz[activeQuestion].choices.map((item) => <li className='answer' id={quiz[activeQuestion].id} key={item} onClick={getUserChoices}>{item} </li>)}
                    </ul>
                </div>
                <div className='buttons'>
                    {quiz[activeQuestion].id === 1
                        ? ""
                        : <button className='go-back-btn' onClick={onClicPrevious}>Back</button>}
                    {quiz[activeQuestion].id === 5
                        ? <Link to="/result">Discover your results</Link>
                        : <button className='submit-btn' onClick={onClickNext}>Next question</button>}
                </div>
                <div className={`progress-bar-wrapper active${quiz[activeQuestion].id}`} >
                    <div className='progressbar'>{quiz[activeQuestion].id}/5</div>
                </div>
            </div>
        </div>

    </>
}

export default QuizCard;