import React from "react";
import {AirlineOption} from "../../utils/interfaces";
import "./searchPage.scss";

interface SearchOptionProps {
    searchOption: AirlineOption;
    handleOptionClick: (searchOption: AirlineOption) => void;
}

const SearchOption = ({searchOption, handleOptionClick}: SearchOptionProps) => {
    return (
        <div key={searchOption.code} className="option-wrapper" onClick={() => handleOptionClick(searchOption)}>
            <div className="option-logo"><img src={searchOption.logo} alt="" /></div>
            <div className="option-text">{`${searchOption.code} - ${searchOption.name}`}</div>
        </div>
    )
}

export default SearchOption;