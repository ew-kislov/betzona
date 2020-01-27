import React from 'react'

import {
    ScreenLayout,
    ContentLayout
} from '../../../templates'
import { Panel, SubtitleText, RowContainer, SubdescriptionText, UpperText } from '../../../primitives'
import { View } from 'react-native'

export const ProfileStatisticsTab = ({ loading, profileStats }) => {
    return (
        <ScreenLayout>
            <ContentLayout loading={loading}>
                {
                    Object.entries(profileStats).map(([category, statsByCategory]) => {
                        return (
                            <View>
                                <SubtitleText style={{ marginTop: 10 }}>{category}</SubtitleText>
                                <Panel style={{ marginTop: 10, marginBottom: 10 }}>
                                    {
                                        statsByCategory.map(statElement => (
                                            <View style={{ marginBottom: 10 }}>
                                                <SubdescriptionText>{statElement.categoryName}</SubdescriptionText>
                                                <RowContainer>
                                                    <SubdescriptionText style={{ flex: 1 }}>Всего</SubdescriptionText>
                                                    <SubdescriptionText style={{ flex: 1 }}>{statElement.totalCount}</SubdescriptionText>
                                                </RowContainer>
                                                <RowContainer>
                                                    <SubdescriptionText style={{ flex: 1 }}>Выиграло</SubdescriptionText>
                                                    <RowContainer style={{ flex: 1 }}>
                                                        <SubdescriptionText>{statElement.winCount}</SubdescriptionText>
                                                        <UpperText>{' ' + statElement.winPercent + '%'}</UpperText>
                                                    </RowContainer>
                                                </RowContainer>
                                                <RowContainer>
                                                    <SubdescriptionText style={{ flex: 1 }}>Проиграло</SubdescriptionText>
                                                    <RowContainer style={{ flex: 1 }}>
                                                        <SubdescriptionText>{statElement.loseCount}</SubdescriptionText>
                                                        <UpperText>{' ' + statElement.losePercent + '%'}</UpperText>
                                                    </RowContainer>
                                                </RowContainer>
                                                <RowContainer>
                                                    <SubdescriptionText style={{ flex: 1 }}>Возвратов</SubdescriptionText>
                                                    <RowContainer style={{ flex: 1 }}>
                                                        <SubdescriptionText>{statElement.drawCount}</SubdescriptionText>
                                                        <UpperText>{' ' + statElement.drawPercent + '%'}</UpperText>
                                                    </RowContainer>
                                                </RowContainer>
                                                <RowContainer>
                                                    <SubdescriptionText style={{ flex: 1 }}>ROI</SubdescriptionText>
                                                    <SubdescriptionText style={{ flex: 1 }}>{statElement.roi + '%'}</SubdescriptionText>
                                                </RowContainer>
                                            </View>
                                        ))
                                    }
                                </Panel>
                            </View>
                        )
                    })
                }
            </ContentLayout>
        </ScreenLayout>
    )
}