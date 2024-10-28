import React from "react";
import {ICON_TYPE} from "../../utils/enums";
import {getSvgIcon} from "../../utils/svgIcons";
import "./airlinePage.scss";

interface AirlineInfoProps {
    title: string;
    value: string;
    icon?: ICON_TYPE;
    isLink?: boolean;
}

const AirlineInfo = ({title, value, icon, isLink}: AirlineInfoProps) => {
    return (
        <div className="airline-detail">
            <div className="detail-icon">{icon && getSvgIcon(icon)}</div>
            <div>
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
        </div>
    )
}

export default AirlineInfo;