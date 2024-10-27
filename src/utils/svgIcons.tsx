import React from "react";
import { ICON_TYPE } from "./enums";

export const getSvgIcon = (type: ICON_TYPE) => {
    switch (type) {
        case ICON_TYPE.FULL_STAR:
            return (
                <img
                    src="https://blackrabbit-frontend-assignment.azurewebsites.net/star.b544c3f2.svg"
                    alt=""
                    style={{ height: "18px" }}
                />
            );
        case ICON_TYPE.EMPTY_STAR:
            return (
                <img
                    src="https://blackrabbit-frontend-assignment.azurewebsites.net/star-hollow.ac2928eb.svg"
                    alt=""
                    style={{ height: "18px" }}
                />
            );
        default:
            return null;
    }
};
