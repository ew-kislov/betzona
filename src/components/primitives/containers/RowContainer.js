import React from 'react'
import { View } from 'react-native'

export const RowContainer = ({ children, style }) => {
    return (
        <View style={[{ flexDirection: 'row' }, style]}>
            {children}
        </View>

    )
}