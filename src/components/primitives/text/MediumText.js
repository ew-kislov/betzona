import React from 'react'
import { Text } from 'react-native'

import { styles } from './styles'

export const MediumText = ({ children, style }) => {
    return (
        <Text style={[styles.mediumText, style]}>{children}</Text>
    )
}