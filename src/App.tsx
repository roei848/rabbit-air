import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import SearchPage from "./components/searchPage/SearchPage";
import AirlinePage from "./components/reviewPage/AirlinePage";
import './app.scss';


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SearchPage/>}/>
                <Route path="/airline/:airline" element={<AirlinePage/>}/>
            </Routes>
        </BrowserRouter>
    );
};


export default App;
