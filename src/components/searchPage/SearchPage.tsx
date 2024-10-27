import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import useFetch from "../../utils/hooks/useFetch";
import useDebounce from '../../utils/hooks/useDebounce';
import {api_base_url} from "../../utils/globals";
import "./searchPage.scss";
import SearchOption from "./SearchOption";
import {AirlineOption} from "../../utils/interfaces";
import AirplaneSpinner from "../loaders/AirplaneSpinner";


const SearchPage = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const debouncedSearchTerm = useDebounce(searchTerm, 1000);

    const {data, loading, error} = useFetch<AirlineOption[]>(
        debouncedSearchTerm ? `${api_base_url}/search?query=${debouncedSearchTerm}` : null
    );

    const handleOptionClick = (searchOption: AirlineOption) => {
        console.log(searchOption);
        navigate(`/airline/${searchOption.code}`);
    }


    const renderAutocomplete = () => {
        if (loading) {
            return <AirplaneSpinner />
        }

        if (error) {
            return <div>Error</div>;
        }

        if (data && debouncedSearchTerm) {
            return <div className="search-options">
                {
                    data.map(opt => <SearchOption key={opt.code} searchOption={opt} handleOptionClick={handleOptionClick}/>)
                }
            </div>
        }

        return <></>
    }

    return (
        <div className="search-page-wrapper">
            <h1>Search Page</h1>
            <input
                type="text"
                className="search-input"
                placeholder="Search For Airline.."
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
            />
            {renderAutocomplete()}
        </div>
    )
}

export default SearchPage;