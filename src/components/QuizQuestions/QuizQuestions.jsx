import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { CorrectContext } from '../../layouts/Main';
import './QuizQuestions.css';
import { EyeIcon } from '@heroicons/react/24/solid'

const QuizQuestions = ({ quiz }) => {
    const [correct,setCorrect] = useContext(CorrectContext)
    const { correctAnswer, question, options } = quiz;

    const userSelection = (e) => {
        const selectedItem =  (e.target.innerText)
        if (selectedItem === correctAnswer) {
            
                  setCorrect(correct+1)
                 toast.success('correct answer',{autoClose: 500})
              
        }
        else{
            toast.error('wrong answer',{autoClose: 500})
        }
        return selectedItem;
    }

    const seeAns = () => {
        const ans = quiz.correctAnswer
        const findAns = quiz.options.find(option=> option === ans)
        if (findAns) {
            toast.warning(<p>{findAns}</p>,{autoClose: 500})
        }
    }


    return (
        <div className='border border-gray-300 bg-cyan-300 lg:w-[800px] mb-10 lg:mx-auto p-5 rounded-md text-center'>
            <p className='flex justify-end p-2 '><EyeIcon onClick={seeAns} className="h-6 w-6 text-purple-600 hover:text-orange-400 hover:cursor-pointer"/></p>
            <div className='border rounded-sm bg-indigo-400 my-2  border-gray-300'>
                <p className='p-4 rounded-sm text-lg text-white'>{question}</p>
            </div>
            <div>
                {
                    options.map((option,idx) =>
                        <p key={idx} onClick={(e)=>userSelection(e)} className='p-2 bg-sky-400 my-2 rounded-sm hover:font-semibold hover:shadow-md hover:text-white hover:bg-indigo-400 hover:cursor-pointer'>
                            {option}
                         </p>
                    )
                }
            </div>
        </div>
    );
};

export default QuizQuestions;