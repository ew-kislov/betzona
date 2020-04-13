import React from 'react'
import { BoxShadow } from "react-native-shadow";

export const RoundWideShadow = ({ children, width, height }) => {
    const shadowOpt = {
        width,
        height,
        color: "#000",
        border: 16,
        radius: 14,
        opacity: 0.08,
        x: 0,
        y: 5,
        style: {
            marginBottom: 20
        }
    }

    return (
        <BoxShadow setting={shadowOpt}>
            {children}
        </BoxShadow>
    )
}