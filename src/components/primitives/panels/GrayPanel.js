import React from 'react'
import { View } from 'react-native'

import { styles } from './styles'

export const GrayPanel = ({ children, style }) => {
    return (
        <View style={[styles.grayPanel, style]}>{children}</View>
    )
}