import React from 'react'
import { View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Pie from 'react-native-pie'

import { SubdescriptionText, RowContainer, ShadowPanel, BoldText, MediumText } from '../../primitives'

import { styles } from './styles'

export const ProfileStatPanel = ({ statElement, style }) => {
    return (
        <ShadowPanel disabled={true} outerStyle={style} innerStyle={{ padding: 15 }} height={134}>
            <RowContainer style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <View>
                    <RowContainer style={{ alignItems: 'center' }}>
                        <LinearGradient colors={['#BCE384', '#68942C']} style={{ width: 10, height: 10, borderRadius: 30 }} />
                        <RowContainer style={{ marginLeft: 10 }}>
                            <SubdescriptionText>Выиграло {statElement.winCount} </SubdescriptionText>
                            <MediumText>/ {statElement.winPercent}%</MediumText>
                        </RowContainer>
                    </RowContainer>

                    <RowContainer style={{ alignItems: 'center', marginTop: 5 }}>
                        <LinearGradient colors={['#FF8888', '#DE0D1B']} style={{ width: 10, height: 10, borderRadius: 30 }} />
                        <RowContainer style={{ marginLeft: 10 }}>
                            <SubdescriptionText>Проиграло {statElement.loseCount} </SubdescriptionText>
                            <MediumText>/ {statElement.losePercent}%</MediumText>
                        </RowContainer>
                    </RowContainer>

                    <RowContainer style={{ alignItems: 'center', marginTop: 5 }}>
                        <LinearGradient colors={['#FFDD64', '#FFA300']} style={{ width: 10, height: 10, borderRadius: 30 }} />
                        <RowContainer style={{ marginLeft: 10 }}>
                            <SubdescriptionText>Возвратов {statElement.drawCount} </SubdescriptionText>
                            <MediumText>/ {statElement.drawPercent}%</MediumText>
                        </RowContainer>
                    </RowContainer>
                </View>

                <Pie
                    radius={35}
                    innerRadius={25}
                    sections={[
                        { percentage: statElement.winPercent, color: '#BCE384' },
                        { percentage: statElement.losePercent, color: '#FF8888', },
                        { percentage: statElement.drawPercent, color: '#FFDD64', }
                    ]}
                    strokeCap={'butt'}
                />
            </RowContainer>


            <RowContainer style={{ justifyContent: 'space-between', width: '100%', marginTop: 16 }}>
                <RowContainer>
                    <MediumText>Всего: {statElement.totalCount}</MediumText>
                </RowContainer>
                <RowContainer>
                    <MediumText>ROI: {statElement.roi + '%'}</MediumText>
                </RowContainer>
            </RowContainer>

        </ShadowPanel>
    )
}