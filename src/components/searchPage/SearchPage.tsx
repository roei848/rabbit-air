import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import DatePicker from "./DatePicker";
import SearchOption from "./SearchOption";
import useFetch from "../../utils/hooks/useFetch";
import ErrorComponent from "../errors/ErrorComponent";
import useDebounce from '../../utils/hooks/useDebounce';
import AirplaneSpinner from "../loaders/AirplaneSpinner";
import {api_base_url} from "../../utils/globals";
import {AirlineOption} from "../../utils/interfaces";
import "./searchPage.scss";


const SearchPage = () => {
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [filterByDates, setFilterByDates] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState("");
    const debouncedSearchTerm = useDebounce(searchTerm, 1000);

    const {data, loading, error} = useFetch<AirlineOption[]>(
        debouncedSearchTerm ? `${api_base_url}/search?query=${debouncedSearchTerm}` : null
    );

    const handleOptionClick = (searchOption: AirlineOption) => {
        navigate(`/airline/${searchOption.code}`);
    }


    const renderAutocomplete = () => {
        if (loading) {
            return <div className="search-options loading"><AirplaneSpinner/></div>
        }

        if (error) {
            return <div className="search-options">
                <ErrorComponent title="Failed to fetch matching airlines" message="Try change your search input" />
            </div>
        }

        if (data && debouncedSearchTerm) {
            return <div className="search-options">
                {
                    data.map(opt => <SearchOption key={opt.code} searchOption={opt}
                                                  handleOptionClick={handleOptionClick}/>)
                }
            </div>
        }

        return <></>
    }

    return (
        <div className="search-page-wrapper">
            <img className="black-rabbit-img" src="/blackRabbit.jpeg" alt="black rabbit airline"/>
            <h1>Welcome to Black Rabbit Airlines</h1>
            <div className="date-picker-wrapper">
                <div className="filter-toggle">
                    <input
                        type="checkbox"
                        className="toggle-input"
                        checked={filterByDates}
                        onChange={(e) => setFilterByDates(e.target.checked)}
                    />
                    <span>Filter By Dates</span>
                </div>
                <DatePicker
                    startDate={startDate}
                    setStartDate={setStartDate}
                    endDate={endDate}
                    setEndDate={setEndDate}
                    disabled={!filterByDates}
                />
            </div>
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