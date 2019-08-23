import React from 'react'
import { Text } from 'react-native'

import { styles } from './styles'

export const SmallText = ({ children, style }) => {
    return (
        <Text style={[styles.smallText, style]}>{children}</Text>
    )
}