import React from 'react'
import { View } from 'react-native'

import { styles } from './styles'

export const Panel = ({ children, style }) => {
    return (
        <View style={[styles.panel, style]}>{children}</View>
    )
}