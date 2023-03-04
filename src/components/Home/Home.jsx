import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizItemsLogo from '../QuizItemsLogo/QuizItemsLogo';

const Home = () => {
    const itemsData= useLoaderData();
    const items = itemsData.data;
    return (
        <div>
            <div className='bg-cyan-400 text-gray-100 py-20 px-15 text-center text-xl font-semibold'>
                <h2 className='lg:text-3xl'>iDEA_QUIZ is a open source site. Where you can know about the programming knowledge. You can explore the quiz sector in here and check some quiz answers quickly.</h2>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-items-center mt-32'>
            {
                items.map(item=><QuizItemsLogo key={item.id} item={item} />)
            }
            </div>
        </div>
    );
};

export default Home;