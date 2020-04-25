import React from 'react'
import { BoxShadow } from "react-native-shadow";

export const RoundWideShadow = ({ children, style, width, height, border, y, x, opacity }) => {
    const shadowOpt = {
        width,
        height,
        color: "#000",
        border: border || 20,
        radius: 14,
        opacity: opacity || 0.05,
        x: x || 0,
        y: y || 5,
        style
    }

    return (
        <BoxShadow setting={shadowOpt}>
            {children}
        </BoxShadow>
    )
}