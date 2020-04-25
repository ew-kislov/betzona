import React from 'react'
import { View } from 'react-native'
import { SubtitleText, RowContainer, TitleText } from '../../primitives'
import { styles } from './styles'
import { QuotationPanel } from './QuotationPanel'

export const OddPanel = ({ oddName, oddInfo, handleOddPress, last }) => {
    return (
        <View>
            <TitleText style={{ marginLeft: 15 }}>{oddName}</TitleText>
            {
                Object.keys(oddInfo).map(oddGroupName => {
                    let renderedOdds = oddInfo[oddGroupName].map(odd =>
                        <QuotationPanel
                            outerStyle={{ marginLeft: 15, marginTop: 20 }}
                            odd={odd}
                            key={odd.id}
                            handleOddPress={() => handleOddPress(odd, oddName)}
                        />)

                    return (
                        <RowContainer key={oddGroupName} style={{ marginBottom: 15, flex: 1, flexWrap: 'wrap' }}>
                            {renderedOdds}
                        </RowContainer>
                    )
                })
            }
            {!last && <View style={[styles.divider, { marginBottom: 15, marginHorizontal: 15 }]} />}
        </View>
    )
}