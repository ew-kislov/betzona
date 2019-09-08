import React from 'react'
import { SafeAreaView, StatusBar, View } from 'react-native'

import { styles } from './styles'

/**
 * ScreenLayout - Wraps screen, defines colors
 * @prop error: Boolean - for screens with data fetching. If error occures, renders Error message
 */
export const ScreenLayout = ({ children }) => {
    return (

        <SafeAreaView backgroundColor='#8b8b8b' style={styles.flex1}>
            <StatusBar backgroundColor='#8b8b8b' barStyle="light-content" />
            <View style={styles.container}>
                {children}
            </View>
        </SafeAreaView>


    )
}