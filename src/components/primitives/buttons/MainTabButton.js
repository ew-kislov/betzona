import React from 'react'
import { View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { styles } from './styles'
import { BoxShadow } from 'react-native-shadow'

const shadowOpt = {
    width: 64,
    height: 64,
    color: "#3730db",
    border: 10,
    radius: 28,
    opacity: 0.1,
    x: 0,
    y: 2,
}

export const MainTabButton = ({ icon, isActive }) => {
    return (
        <View>
            {
                isActive ? (
                    <BoxShadow setting={shadowOpt}>
                        <LinearGradient colors={['#6ECCFC', '#3692C0']} style={styles.mainTabButton}>
                            {icon}
                        </LinearGradient>
                    </BoxShadow>
                ) : (
                        <View>
                            {icon}
                        </View>
                    )
            }
        </View>
    )
}