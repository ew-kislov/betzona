import React from 'react'
import { View } from 'react-native'

import { styles } from './styles'

export const SportTabButton = ({ icon, isActive }) => {
    return (
        <View style={[isActive ? styles.sportTabButton : styles.sportTabButtonInactive]}>
            {icon}
        </View>
    )
}