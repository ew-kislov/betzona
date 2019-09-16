import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

import { Panel, DescriptionText } from '../../primitives'
import { styles } from './styles'

export const SportPanel = ({ sport, style, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Panel style={[{ flexDirection: 'row', alignItems: 'center' }, style]}>
                <Image style={styles.sportImage} source={sport.imageSource} />
                <DescriptionText style={{ marginLeft: 20 }}>{sport.name}</DescriptionText>
            </Panel>
        </TouchableOpacity>
    )
}