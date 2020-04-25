import React from 'react'
import { Text } from 'react-native'

import { styles } from './styles'

export const ThinText = ({ children, style }) => {
    return (
        <Text style={[styles.thinText, style]}>{children}</Text>
    )
}