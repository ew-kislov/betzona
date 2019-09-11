import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Panel, DescriptionText } from '../../primitives'

export const SportPanel = ({ sport, style, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Panel style={[{ flexDirection: 'row' }, style]}>
                <DescriptionText>{sport.name}</DescriptionText>
            </Panel>
        </TouchableOpacity>
    )
}