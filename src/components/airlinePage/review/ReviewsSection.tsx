import React from "react";
import ReviewComment from "./ReviewComment";
import {Review} from "../../../utils/interfaces";
import "./review.scss";

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