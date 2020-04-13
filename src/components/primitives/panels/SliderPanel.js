import React from 'react'
import { View } from 'react-native'

import { styles } from './styles'

export const SliderPanel = ({ children, style }) => {
    return (
        <View style={[styles.sliderPanel, style]}>{children}</View>
    )
}