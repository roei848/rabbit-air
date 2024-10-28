import React from 'react';
import {Route, Routes, BrowserRouter, HashRouter} from 'react-router-dom';
import SearchPage from "./components/searchPage/SearchPage";
import AirlinePage from "./components/airlinePage/AirlinePage";
import './app.scss';


const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<SearchPage/>}/>
                <Route path="/airline/:airline" element={<AirlinePage/>}/>
            </Routes>
        </HashRouter>
    );
};


export default App;
