import React from 'react'
import { Text } from 'react-native'

import { styles } from './styles'

export const GrayText = ({ children, style }) => {
    return (
        <Text style={[styles.grayText, style]}>{children}</Text>
    )
}