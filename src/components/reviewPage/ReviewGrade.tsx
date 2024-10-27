import React from "react";
import "./airlinePage.scss";
import {getSvgIcon} from "../../utils/svgIcons";
import {ICON_TYPE} from "../../utils/enums";

interface ReviewGradeProps {
    title: string;
    grade: number;
}

const ReviewGrade = ({title, grade}: ReviewGradeProps) => {
    const emptyStars = 5 - grade;

    return (
        <div className="review-grade">
            <div className="review-title">{title}</div>
            <div className="review-grade">
                {Array(grade).fill(0).map(() => (
                    getSvgIcon(ICON_TYPE.FULL_STAR)
                ))}
                {Array(emptyStars).fill(0).map(() => (
                    getSvgIcon(ICON_TYPE.EMPTY_STAR)
                ))}
            </div>
        </div>
    )
}

export default ReviewGrade;