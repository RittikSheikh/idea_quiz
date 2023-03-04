import React from 'react';
import { Link } from 'react-router-dom';

const QuizItemsLogo = ({ item }) => {
  const { id, logo, name, total } = item;
  return (
    <Link to={`quiz/${id}`} aria-label='View Item'>
    <div className='bg-slate-200 rounded-md p-5 my-10'>
    <div className='relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
      <div>
      <img
        className='object-cover w-full h-56 md:h-64 xl:h-80'
        src={logo}
        alt=''
      />
      <p className='bg-indigo-300 text-xl text-gray-200 text-center rounded-md p-1 my-1'>{name}</p>
      <p className='bg-indigo-300 text-xl text-gray-200 text-center rounded-md p-1 my-1'>Quiz: {total}</p>
      </div>
      <div className='absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100'>
        <p className='mb-4 text-lg font-bold text-gray-100'>{name}</p>
        <br />
        <p className='text-sm tracking-wide text-gray-300'>Quiz: {total}</p>
      </div>
    </div>
    </div>
  </Link>
  );
};

export default QuizItemsLogo;