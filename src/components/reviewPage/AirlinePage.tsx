import React, {useState} from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../utils/hooks/useFetch";
import {api_base_url} from "../../utils/globals";
import "./airlinePage.scss";
import {AirlineData} from "../../utils/interfaces";
import AirplaneSpinner from "../loaders/AirplaneSpinner";
import AirlineDetails from "./AirlineDetails";
import ReviewSection from "./ReviewsSection";


const AirlinePage = () => {
    const { airline } = useParams<{ airline: string }>();

    const {data, loading, error} = useFetch<AirlineData>(`${api_base_url}/airline?airline-code=${airline}`)

    console.log(data, loading, error);

    const renderPageContent = () => {
        if (loading) {
            return <AirplaneSpinner />;
        }

        if (error) {
            return <div>Error</div>;
        }

        if (data) {
            return <div className="airline-page-wrapper">
                <AirlineDetails airlineData={data} />
                <ReviewSection reviews={data.reviews} />
            </div>
        }

        return <></>
    }

    return (
        <div className="airline-page-wrapper">
            {renderPageContent()}
        </div>
    )
}

export default AirlinePage;