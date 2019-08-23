import React from 'react'
import { View } from 'react-native'

import { TitleText, WidePrimaryButton, DividerPanel } from '../../primitives'

export const OneXBetOfferPanel = ({ onPress, style }) => {
    return (
        <DividerPanel style={style}>
            <TitleText style={{ textAlign: 'center' }}>Букмекерская контора 1хСтавка дарит 4000 рублей за регистрацию</TitleText>
            <WidePrimaryButton onPress={onPress} style={{ marginTop: 15 }}>Получить</WidePrimaryButton>
        </DividerPanel>
    )
}