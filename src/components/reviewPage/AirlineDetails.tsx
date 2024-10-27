import React from "react";
import {AirlineData} from "../../utils/interfaces";
import AirlineInfo from "./AirlineInfo";
import "./airlinePage.scss";

interface AirlineDetailsProps {
    airlineData: AirlineData;
}

const AirlineDetails = ({airlineData}: AirlineDetailsProps) => {
    return (
        <div className="airline-details">
            <div className="airline-title-wrapper">
                <img src={airlineData.logo} alt={airlineData.code} className="airline-logo"/>
                <h1 className="airline-title">{`${airlineData.name} - ${airlineData.code}`}</h1>
                <AirlineInfo title="Customer Support Email" value={airlineData.customerServiceEmail} />
                <AirlineInfo title="Customer Support Phone" value={airlineData.customerServicePhone} />
                <AirlineInfo title="Website" value={airlineData.customerServiceWebsite} isLink={true}/>
            </div>
        </div>
    )
}

export default AirlineDetails;