import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Panel, DescriptionText, ChevronIcon } from '../../primitives'
import { styles } from './styles'

export const TournamentPanel = ({ tournament, style, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.itemPanel, style]}>
                <View style={{ flex: 1, flexGrow: 10 }}>
                    <DescriptionText>{tournament.name}</DescriptionText>
                </View>
                <View style={{ flex: 1, flexGrow: 1, marginLeft: 10, alignItems: 'flex-end' }}>
                    <ChevronIcon />
                </View>
            </View>
        </TouchableOpacity>
    )
}