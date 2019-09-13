import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Panel, DescriptionText, ChevronIcon, PrimaryText } from '../../primitives'
import { styles } from './styles'

export const MatchPanel = ({ match, style, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.itemPanel, style]}>
                <View style={{ flex: 1, flexGrow: 10 }}>
                    <PrimaryText>{match.date}</PrimaryText>
                    <DescriptionText>{match.name}</DescriptionText>
                </View>
                <View style={{ flex: 1, flexGrow: 1, marginLeft: 10 }}>
                    <ChevronIcon />
                </View>
            </View>
        </TouchableOpacity>
    )
}