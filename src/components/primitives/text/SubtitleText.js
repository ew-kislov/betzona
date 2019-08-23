import React from 'react'
import { Text } from 'react-native'

import { styles } from './styles'

export const SubtitleText = ({ children, style }) => {
    return (
        <Text style={[styles.subtitleText, style]}>{children}</Text>
    )
}