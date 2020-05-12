import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { Panel, DescriptionText, ChevronIcon, PrimaryText, MediumText } from '../../primitives'
import { styles } from './styles'

export const MatchPanel = ({ match, style, onPress, popular, nearest }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.itemPanel, style]}>
                <View style={{ flex: 1, flexGrow: 10 }}>
                    <Text style={styles.dateText}>{match.date}</Text>
                    <MediumText>{match.name}</MediumText>
                    { (popular || nearest) && <Text style={styles.dateText}>{match.tournament}</Text>}
                </View>
                <View style={{ flex: 1, flexGrow: 1, marginLeft: 10, alignItems: 'flex-end' }}>
                    <ChevronIcon />
                </View>
            </View>
        </TouchableOpacity>
    )
}