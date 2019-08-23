import React from 'react'
import { View, TouchableOpacity } from 'react-native'

import { DescriptionText, RateButton, SmallText, RowContainer, ChevronIcon } from '../../primitives'
import { styles } from './styles'

export const PrognosisPanel = ({ title, dateString, odd, sport, rate, onPress, popular, style }) => {
    let description = dateString + ' - ' + sport + '. ' + odd

    return (
        <TouchableOpacity onPress={onPress}>
            <RowContainer style={[styles.prognosePanel, style]}>
                <View style={{ flexShrink: 1 }}>
                    <DescriptionText>{title}</DescriptionText>
                    <SmallText>{description}</SmallText>
                </View>
                <RowContainer style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <RateButton popular={popular}>{rate}</RateButton>
                    <View style={{ marginLeft: 20 }}><ChevronIcon /></View>
                </RowContainer>
            </RowContainer>
        </TouchableOpacity>
    )
}