import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';



export const CorrectContext = createContext([])


const Main = () => {

    const [correct,setCorrect] = useState(0)

    return (
        <CorrectContext.Provider value={[correct,setCorrect]}>
            <Header/>
            <Outlet/>
            <Footer/>
        </CorrectContext.Provider>
    );
};

export default Main;