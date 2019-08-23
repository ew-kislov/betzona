import React from 'react'
import { Text } from 'react-native'

import { styles } from './styles'

export const BoldText = ({ children, style }) => {
    return (
        <Text style={[styles.boldText, style]}>{children}</Text>
    )
}