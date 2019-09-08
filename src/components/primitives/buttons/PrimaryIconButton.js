import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { styles } from './styles'

export const PrimaryIconButton = ({ children, style, onPress, icon }) => {
    return (
        <TouchableOpacity
            style={[styles.iconPrimaryButton, style, { flexDirection: 'row', width: '100%' }]}
            onPress={onPress}
        >
            {icon}
            <Text style={[styles.widePrimaryButtonText, { marginLeft: 10 }]}>{children}</Text>
        </TouchableOpacity>

    )
}