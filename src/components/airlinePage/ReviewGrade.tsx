import React from "react";
import {ICON_TYPE} from "../../utils/enums";
import {getSvgIcon} from "../../utils/svgIcons";
import "./airlinePage.scss";

interface ReviewGradeProps {
    title: string;
    grade: number;
}

const ReviewGrade = ({title, grade}: ReviewGradeProps) => {
    const fullStars = Math.floor(grade);
    const emptyStars = 5 - fullStars;

    return (
        <div className="review-grade">
            <div className="review-title">{title}</div>
            <div className="review-grade">
                {Array(fullStars).fill(0).map((_, index) => (
                    <div key={index}>{getSvgIcon(ICON_TYPE.FULL_STAR)}</div>
                ))}
                {Array(emptyStars).fill(0).map((_, index) => (
                    <div key={index}>{getSvgIcon(ICON_TYPE.EMPTY_STAR)}</div>
                ))}
            </div>
        </div>
    )
}

export default ReviewGrade;