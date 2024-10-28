import React from "react";
import {categoryTitles, Review, reviewCategories} from "../../utils/interfaces";
import ReviewGrade from "./ReviewGrade";
import "./airlinePage.scss";

interface ReviewCommentProps {
    review: Review;
}

const ReviewComment = ({review}: ReviewCommentProps) => {
    return (
        <div className="review-comment">
            <div className="review-comment-content">
                <div className="reviewer-name">{review.customerName}</div>
                <div className="review-text">{review.review}</div>
            </div>
            <div className="review-grades">
                {reviewCategories.map((category) => (
                    <ReviewGrade
                        key={category}
                        title={categoryTitles[category]}
                        grade={review[category as keyof Review] as number}
                    />
                ))}
            </div>
        </div>
    )
}

export default ReviewComment;