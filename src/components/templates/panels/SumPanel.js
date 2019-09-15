import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import { styles } from './styles'

export const SumPanel = ({ sum, activeSum, handleSumChange }) => {
    return (
        <TouchableOpacity onPress={handleSumChange} style={sum == activeSum ? styles.activeSum : styles.inactiveSum}>
            <Text style={sum == activeSum ? styles.activeSumText : styles.inactiveSumText}>{sum + '€'}</Text>
        </TouchableOpacity>
    )
}