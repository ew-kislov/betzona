import React from 'react'
import { Text } from 'react-native'

import { styles } from './styles'

export const UpperText = ({ children, style }) => {
    return (
        <Text style={[styles.upperText, style]}>{children}</Text>
    )
}