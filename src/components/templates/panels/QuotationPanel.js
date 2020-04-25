import React from 'react'
import { RateButton, SubdescriptionText, ShadowPanel } from '../../primitives'

export const QuotationPanel = ({ odd, handleOddPress, innerStyle, outerStyle }) => {
    return (
        <ShadowPanel height={86} width={100}  innerStyle={[innerStyle, { justifyContent: 'space-around', paddingVertical: 5, alignItems: 'center' }]} outerStyle={[outerStyle]} onPress={() => handleOddPress()}>
            <SubdescriptionText>{odd.label}</SubdescriptionText>
            <RateButton>{odd.ratio}</RateButton>
        </ShadowPanel>
    )
}