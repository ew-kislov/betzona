import React from 'react'
import { Text } from 'react-native'

import { styles } from './styles'

export const WhiteText = ({ children, style }) => {
    return (
        <Text style={[styles.whiteText, style]}>{children}</Text>
    )
}