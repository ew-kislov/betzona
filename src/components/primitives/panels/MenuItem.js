import React from 'react'
import { TouchableOpacity } from 'react-native'

import { styles } from './styles'

export const MenuItem = ({ children, style, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.menuItem, style]}>{children}</TouchableOpacity>
    )
}