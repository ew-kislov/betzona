import React from 'react'
import { View } from 'react-native'
import { Panel, TitleText, DescriptionText } from '../../primitives'

export const PrognosisTextPanel = ({ children, style }) => {
    return (
        <View style={style}>
            <TitleText>Прогноз</TitleText>
            <DescriptionText style={{ marginTop: 10 }}>
                {children}
            </DescriptionText>
        </View>
    )
}