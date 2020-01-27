import React from 'react'
import { Text } from 'react-native'

import { styles } from './styles'

export const SubdescriptionText = ({ children, style }) => {
    return (
        <Text style={[styles.subdescriptionText, style]}>{children}</Text>
    )
}