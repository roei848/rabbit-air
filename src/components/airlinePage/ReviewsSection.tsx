import React from "react";
import {Review} from "../../utils/interfaces";
import "./airlinePage.scss";
import ReviewComment from "./ReviewComment";

interface ReviewSectionProps {
    reviews: Review[];
}

const ReviewSection = ({reviews}: ReviewSectionProps) => {
    return (
        <div className="reviews-section-wrapper">
            {reviews.map((review, index) => <ReviewComment key={index} review={review} />)}
        </div>
    )
}

export default ReviewSection;