import React, {useEffect} from "react";
import AirlineInfo from "./AirlineInfo";
import ReviewGrade from "./ReviewGrade";
import {AirlineData, categoryTitles, Review, reviewCategories} from "../../utils/interfaces";
import "./airlinePage.scss";

interface AirlineDetailsProps {
    airlineData: AirlineData;
}


const AirlineDetails = ({airlineData}: AirlineDetailsProps) => {
    const [grades, setGrades] = React.useState<Record<string, number> | null>(null);

    const calculateAverageGrades = (reviews: Review[]) => {
        const totals = Object.fromEntries(reviewCategories.map(category => [category, 0]));

        reviews.forEach((review: Review) => {
            reviewCategories.forEach((category) => {
                totals[category] += review[category as keyof Review] as number;
            })
        })

        return Object.fromEntries(
            reviewCategories.map(category => [category, totals[category] / reviews.length])
        );
    }

    useEffect(() => {
        const averageGrades = calculateAverageGrades(airlineData.reviews)
        setGrades(averageGrades);
    }, [airlineData.reviews]);

    return (
        <div className="airline-details">
            <div className="airline-title-wrapper">
                <img src={airlineData.logo} alt={airlineData.code} className="airline-logo"/>
                <h1 className="airline-title">{`${airlineData.name} - ${airlineData.code}`}</h1>
            </div>
            <AirlineInfo title="Customer Support Email" value={airlineData.customerServiceEmail}/>
            <AirlineInfo title="Customer Support Phone" value={airlineData.customerServicePhone}/>
            <AirlineInfo title="Website" value={airlineData.customerServiceWebsite} isLink={true}/>
            <div className="average-grades">
                {grades && reviewCategories.map((category) => (
                    <ReviewGrade
                        key={category}
                        title={categoryTitles[category]}
                        grade={grades[category]}
                    />
                ))}
            </div>
        </div>
    )
}

export default AirlineDetails;