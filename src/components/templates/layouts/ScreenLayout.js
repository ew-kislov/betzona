import React from 'react'
import { View } from 'react-native'

import { styles } from './styles'

export const ScreenLayout = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}