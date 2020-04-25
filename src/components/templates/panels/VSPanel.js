import React from 'react'
import { View, Image, Text } from 'react-native'

import { BoldText } from '../../primitives'

import { styles } from './styles'

export const VSPanel = ({ homeTeam, awayTeam, style, time, date }) => {
    return (
        <View style={[styles.VSPanel, style]}>
            <View style={styles.VSImageContainer}>
                <BoldText style={{ textAlign: 'center' }}>{homeTeam && homeTeam.name}</BoldText>
                <Image
                    source={homeTeam && homeTeam.logoUrl !== '' ? { uri: 'https://betzona.ru/img/logo_team/' + homeTeam.logoUrl } : require('../../../../assets/png/no_logo.png')}
                    style={[styles.VSImage, { marginTop: 10 }]}
                />
            </View>

            <View style={styles.VSMiddle}>
                <Text style={styles.VSText}>{date + '\n' + time}</Text>
            </View>


            <View style={styles.VSImageContainer}>
                <BoldText style={{ textAlign: 'center' }}>{awayTeam && awayTeam.name}</BoldText>
                <Image
                    source={awayTeam && awayTeam.logoUrl !== '' ? { uri: 'https://betzona.ru/img/logo_team/' + awayTeam.logoUrl } : require('../../../../assets/png/no_logo.png')}
                    style={[styles.VSImage, { marginTop: 10 }]}
                />
            </View>
        </View>
    )
}