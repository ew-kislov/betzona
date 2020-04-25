import React from 'react'
import { TouchableOpacity, Image, View } from 'react-native'

import { Panel, SubtitleText, ShadowPanel, ChevronIcon, RowContainer } from '../../primitives'
import { styles } from './styles'

export const SportPanel = ({ sport, style, onPress }) => {
    return (
        <ShadowPanel onPress={onPress} height={64} border={20} y={28} opacity={0.05} outerStyle={{ marginBottom: 20 }} innerStyle={[{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }, style]}>
            <RowContainer style={{ alignItems: 'center' }}>
                <Image style={styles.sportImage} source={sport.imageSource} />
                <SubtitleText style={{ marginLeft: 20 }}>{sport.name}</SubtitleText>
            </RowContainer>
            <ChevronIcon style={{ marginRight: 20 }} />
        </ShadowPanel>
    )
}