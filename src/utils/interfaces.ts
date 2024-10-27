export interface AirlineOption {
    code: string;
    logo: string;
    name: string;
}

export interface AirlineData {
    code: string;
    name: string;
    logo: string;
    customerServiceEmail: string;
    customerServicePhone: string;
    customerServiceWebsite: string;
    reviews: Review[]
}


export interface Review {
    customerName: string;
    review: string;
    overallScore: number;
    scheduleAccuracy: number;
    foodQuality: number;
    legRoom: number;
    cleanliness: number;
    staff: number;
    wouldRecommend: number;
}

export const reviewCategories = ['overallScore', 'foodQuality', 'legRoom', 'cleanliness', 'staff', 'wouldRecommend'];

export const categoryTitles: { [key: string]: string } = {
    overallScore: "Overall Score",
    foodQuality: "Food Quality",
    legRoom: "Leg Room",
    cleanliness: "Cleanliness",
    staff: "Staff",
    wouldRecommend: "Would Recommend"
};