import React from "react";
import {ICON_TYPE} from "./enums";

export const getSvgIcon = (type: ICON_TYPE) => {
    switch (type) {
        case ICON_TYPE.FULL_STAR:
            return (
                <img
                    src="https://blackrabbit-frontend-assignment.azurewebsites.net/star.b544c3f2.svg"
                    alt=""
                    style={{height: "18px"}}
                />
            );
        case ICON_TYPE.EMPTY_STAR:
            return (
                <img
                    src="https://blackrabbit-frontend-assignment.azurewebsites.net/star-hollow.ac2928eb.svg"
                    alt=""
                    style={{height: "18px"}}
                />
            );
        case ICON_TYPE.EMAIL:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="24px" height="24px"
                     viewBox="0 0 1920 1920">
                    <path
                        d="M0 1694.235h1920V226H0v1468.235ZM112.941 376.664V338.94H1807.06v37.723L960 1111.233l-847.059-734.57ZM1807.06 526.198v950.513l-351.134-438.89-88.32 70.475 378.353 472.998H174.042l378.353-472.998-88.32-70.475-351.134 438.89V526.198L960 1260.768l847.059-734.57Z"
                        fill-rule="evenodd"/>
                </svg>
            )
        case ICON_TYPE.PHONE:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z"
                        stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            )
        case ICON_TYPE.WEBSITE:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 64 64"
                     stroke-width="3" stroke="#000000" fill="none">
                    <path d="M39.93,55.72A24.86,24.86,0,1,1,56.86,32.15a37.24,37.24,0,0,1-.73,6"/>
                    <path d="M37.86,51.1A47,47,0,0,1,32,56.7"/>
                    <path d="M32,7A34.14,34.14,0,0,1,43.57,30a34.07,34.07,0,0,1,.09,4.85"/>
                    <path d="M32,7A34.09,34.09,0,0,0,20.31,32.46c0,16.2,7.28,21,11.66,24.24"/>
                    <line x1="10.37" y1="19.9" x2="53.75" y2="19.9"/>
                    <line x1="32" y1="6.99" x2="32" y2="56.7"/>
                    <line x1="11.05" y1="45.48" x2="37.04" y2="45.48"/>
                    <line x1="7.14" y1="32.46" x2="56.86" y2="31.85"/>
                    <path
                        d="M53.57,57,58,52.56l-8-8,4.55-2.91a.38.38,0,0,0-.12-.7L39.14,37.37a.39.39,0,0,0-.46.46L42,53.41a.39.39,0,0,0,.71.13L45.57,49Z"/>
                </svg>
            )
        default:
            return null;
    }
};
