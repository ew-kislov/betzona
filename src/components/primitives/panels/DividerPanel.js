import React from 'react'
import { View } from 'react-native'

import { styles } from './styles'

export const DividerPanel = ({ children, style, light }) => {
    return (
        <View style={[light ? styles.dividerPanelLight : styles.dividerPanel, style]}>{children}</View>
    )
}