import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import { styles } from './styles'

export const SliderButton = ({ children, style, isActive, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[isActive ? styles.sliderButton : styles.sliderButtonInactive, style]}>
            <Text style={isActive ? styles.sliderButtonText : styles.sliderButtonInactiveText}>{children}</Text>
        </TouchableOpacity>

    )
}