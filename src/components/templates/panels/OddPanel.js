import React from 'react'
import { View } from 'react-native'
import { SubtitleText, RowContainer } from '../../primitives'
import { styles } from './styles'
import { QuotationPanel } from './QuotationPanel'

export const OddPanel = ({ oddName, oddInfo, handleOddPress }) => {
    return (
        <View>
            <SubtitleText>{oddName}</SubtitleText>
            <View style={[styles.divider, { marginVertical: 10 }]} />
            {
                Object.keys(oddInfo).map(oddSubName => {
                    let renderedOdds = oddInfo[oddSubName].map(odd => <QuotationPanel odd={odd} handleOddPress={handleOddPress} />)
                    return (
                        <RowContainer style={{ marginBottom: 15 }}>
                            {renderedOdds}
                        </RowContainer>
                    )
                })
            }
        </View>
    )
}