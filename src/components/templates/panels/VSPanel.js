import React from 'react'
import { View, Image, Text } from 'react-native'

import { BoldText } from '../../primitives'

import { styles } from './styles'

export const VSPanel = ({ homeTeam, awayTeam, style }) => {
    // let mockedLogo =
    //     <View style={{ height: 80, width: 80, borderRadius: 100, borderColor: '#e2e2e2', borderWidth: 3, justifyContent: 'center', alignItems: 'center' }}>
    //         <Text style={{ fontFamily: 'PTSans-Narrow', fontSize: 20, color: '#e2e2e2', textAlign: 'center', alignSelf: 'center' }}>OFFICIAL LOGO SOON</Text>
    //     </View>

    return (
        <View style={[styles.VSPanel, style]}>
            <View style={styles.VSImageContainer}>
                <Image
                    source={ homeTeam && homeTeam.logoUrl !== '' ? { uri: 'https://betzona.ru/img/logo_team/' + homeTeam.logoUrl } : require('../../../../assets/png/no_logo.png')}
                    style={styles.VSImage}
                />
                {/* {mockedLogo} */}
                <BoldText style={{ marginTop: 20 }}>{homeTeam && homeTeam.name}</BoldText>
            </View>

            <View style={styles.VSMiddle}>
                <View style={styles.divider}><Text> </Text></View>
                <Text style={styles.VSText}>VS</Text>
                <View style={styles.divider}><Text> </Text></View>
            </View>


            <View style={styles.VSImageContainer}>
                <Image
                    source={ awayTeam && awayTeam.logoUrl !== '' ? { uri: 'https://betzona.ru/img/logo_team/' + awayTeam.logoUrl } : require('../../../../assets/png/no_logo.png')}
                    style={styles.VSImage}
                />
                {/* {mockedLogo} */}
                <BoldText style={{ marginTop: 20 }}>{awayTeam && awayTeam.name}</BoldText>
            </View>
        </View>
    )
}