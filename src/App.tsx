import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import SearchPage from "./components/searchPage/SearchPage";
import './app.scss';


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SearchPage/>}/>
                {/*<Route path="/category" element={<SearchResultsPage/>}/>*/}
            </Routes>
        </BrowserRouter>
    );
};


export default App;
