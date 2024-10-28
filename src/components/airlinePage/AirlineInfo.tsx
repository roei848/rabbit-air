import React from "react";
import "./airlinePage.scss";

interface AirlineInfoProps {
    title: string;
    value: string;
    isLink?: boolean;
}

const AirlineInfo = ({title, value, isLink}: AirlineInfoProps) => {
    return (
        <div className="airline-detail">
            <div className="detail-title">{title}</div>
            <div className="detail-value">
                {isLink ? (
                    <a href={value} target="_blank" rel="noopener noreferrer">
                        {value}
                    </a>
                ) : (
                    value
                )}
            </div>
        </div>
    )
}

export default AirlineInfo;