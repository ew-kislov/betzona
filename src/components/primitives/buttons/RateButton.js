import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

import { styles } from './styles'
import { WhiteText } from '../text'

export const RateButton = ({ children, style }) => {
    return (
        <LinearGradient colors={['#6ECCFC', '#3692C0']} style={[styles.rateButton, style]}>
            <WhiteText>{children}</WhiteText>
        </LinearGradient>
    )
}