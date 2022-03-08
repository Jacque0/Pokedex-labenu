import React from 'react';
import HomePage from '../pages/HomePage/HomePage';
import PokedexPage from '../pages/PokedexPage/PokedexPage';
import DetailsPage from '../pages/DetailsPage/DetailsPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from '../components/Header/Header';


const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/pokedex' element={<PokedexPage />} />
                <Route path='/detalhes/:id' element={<DetailsPage />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router; 