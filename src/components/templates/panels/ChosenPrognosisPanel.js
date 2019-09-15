import React from 'react'
import { View, Text } from 'react-native'

import { styles } from './styles'

export const ChosenPrognosisPanel = ({ name, rate }) => {
    return (
        <View style={styles.chosenPrognosisPanel}>
            <Text style={styles.chosenPrognosisPanelTopText}>Выбранный прогноз</Text>
            <Text style={styles.chosenPrognosisPanelBottomText}>{name + '(' + rate + ')'}</Text>
        </View>
    )
}