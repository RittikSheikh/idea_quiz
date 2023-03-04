import React, { useContext } from 'react';
import './Quiz.css';
import { useLoaderData } from 'react-router-dom';
import { CorrectContext } from '../../layouts/Main';
import QuizQuestions from '../QuizQuestions/QuizQuestions';

const Quiz = () => {

    const [correct] = useContext(CorrectContext)

    const quizData = useLoaderData();
    const quizs = quizData.data;
    return (
        <div>
            <h1 className='text-center p-5 text-2xl font-semibold bg-cyan-300 text-gray-600'>{quizs.name}</h1>
            <div className='quiz-main my-16 pl-2'>
            <div>
            {
                quizs.questions.map(quiz=><QuizQuestions key={quiz.id} quiz={quiz} />)
            }
        </div>
        <div className='quiz-value rounded-md bg-scroll p-2 h-[200px]'>
            <p className=' sm:text-2xl'>Correct Answers</p>
            <span className='quiz-count'>{correct}</span>
        </div>
        </div>
        </div>
    );
};

export default Quiz;