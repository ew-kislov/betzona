import React from 'react'
import { View } from 'react-native'

import { styles } from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const MenuItem = ({ children, style, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.menuItem, style]}>{children}</TouchableOpacity>
    )
}