import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { DescriptionText, RateButton, RowContainer } from '../../primitives'

export const QuotationPanel = ({ odd, handleOddPress }) => {
    return (
        <TouchableOpacity onPress={() => handleOddPress(odd.id)}>
            <RowContainer style={{ marginRight: 20, alignItems: 'center' }}>
                <View style={{ width: 80 }}>
                    <DescriptionText>{odd.label}</DescriptionText>
                </View>
                <RateButton style={{ marginLeft: 10 }}>{odd.ratio}</RateButton>
            </RowContainer>
        </TouchableOpacity>
    )
}