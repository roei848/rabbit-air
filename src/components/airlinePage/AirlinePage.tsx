import React from "react";
import {useParams} from "react-router-dom";
import ReviewSection from "./ReviewsSection";
import AirlineDetails from "./AirlineDetails";
import useFetch from "../../utils/hooks/useFetch";
import ErrorComponent from "../errors/ErrorComponent";
import AirplaneSpinner from "../loaders/AirplaneSpinner";
import {api_base_url} from "../../utils/globals";
import {AirlineData} from "../../utils/interfaces";
import "./airlinePage.scss";


const AirlinePage = () => {
    const {airline} = useParams<{ airline: string }>();
    const {data, loading, error} = useFetch<AirlineData>(`${api_base_url}/airline?airline-code=${airline}`)

    const renderPageContent = () => {
        if (loading) {
            return <AirplaneSpinner/>;
        }

        if (error) {
            return <ErrorComponent title="Failed to fetch reviews" message={error} imgSrc="/sadRabbit.png"/>;
        }

        if (data) {
            return <>
                <AirlineDetails airlineData={data}/>
                <ReviewSection reviews={data.reviews}/>
            </>
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