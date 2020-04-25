import React from 'react'
import { View, Image, TouchableOpacity, Dimensions } from 'react-native'

import { DescriptionText, SmallText, RowContainer, BoldText, RoundWideShadow, RateButton } from '../../primitives'
import { styles } from './styles'

export const PrognosisPanel = ({ home, away, homeLogo, awayLogo, dateString, sport, rate, onPress, style }) => {
    return (
        <RoundWideShadow width={Dimensions.get('screen').width - 30} height={165} style={{ marginBottom: 10 }}>
            <TouchableOpacity onPress={onPress}>
                <View style={[styles.prognosePanel, style]}>
                    <RowContainer style={{ height: 50, width: '86%' }}>
                        <View style={[styles.prognoseSection, { justifyContent: 'center' }]}>
                            <BoldText style={{ textAlign: 'center' }}>{home}</BoldText>
                        </View>
                        <View style={styles.prognoseSection}>
                            <BoldText>—</BoldText>
                        </View>
                        <View style={[styles.prognoseSection, { justifyContent: 'center' }]}>
                            <BoldText style={{ textAlign: 'center' }}>{away}</BoldText>
                        </View>
                    </RowContainer>

                    <RowContainer style={{ height: 65, width: '86%', paddingBottom: 5 }}>
                        <View style={styles.prognoseSection}>
                            <Image
                                source={homeLogo && homeLogo !== '' ? { uri: 'https://betzona.ru/img/logo_team/' + homeLogo } : require('../../../../assets/png/no_logo.png')}
                                style={styles.logoImage}
                            />
                        </View>
                        <View style={styles.prognoseSection}>
                            <SmallText>{sport + '\n' + dateString}</SmallText>
                        </View>
                        <View style={styles.prognoseSection}>
                            <Image
                                source={awayLogo && awayLogo !== '' ? { uri: 'https://betzona.ru/img/logo_team/' + awayLogo } : require('../../../../assets/png/no_logo.png')}
                                style={styles.logoImage}
                            />
                        </View>
                    </RowContainer>
                    <RowContainer style={styles.prognosisBottom}>
                        <DescriptionText>Посмотреть прогноз</DescriptionText>
                        <RateButton>{rate}</RateButton>
                    </RowContainer>
                </View>
            </TouchableOpacity>
        </RoundWideShadow>
    )
}