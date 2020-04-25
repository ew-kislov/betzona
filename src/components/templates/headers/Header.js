import React from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { withNavigation } from 'react-navigation'

import { MenuIcon, BackIcon } from '../../primitives'
import { styles } from './styles.js'
import { BoxShadow } from 'react-native-shadow'

const shadowOpt = {
    width: Dimensions.get('window').width,
    height: 54,
    color: "#000",
    border: 150,
    radius: 0,
    opacity: 0.05,
    x: 0,
    y: 0,
}

const shadowOptEmpty = {
    width: Dimensions.get('window').width,
    height: 54,
    color: "#000",
    border: 1,
    radius: 0,
    opacity: 0,
    x: 0,
    y: 0,
}

export const HeaderWithoutNavigation = ({ navigation, customTitle, title, shadow, back, menu }) => {

    let headerTitle;
    if (customTitle) {
        if (!title)
            headerTitle = ''
        else
            headerTitle = title

        if (headerTitle.length > 30)
            headerTitle = headerTitle.substring(0, 29) + '...'
    } else {
        headerTitle = navigation.state.routeName
    }

    return (
        <BoxShadow setting={shadow ? shadowOpt : shadowOptEmpty}>
            <View style={styles.header}>
                {
                    back ?
                        <TouchableOpacity style={styles.headerIcon} onPress={() => navigation.goBack()}>
                            <BackIcon />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.headerIcon} onPress={() => navigation.toggleDrawer()}>
                            <MenuIcon />
                        </TouchableOpacity>
                }

                <View style={styles.headerTitleView}>
                    <Text style={[styles.headerText]}>
                        {headerTitle}
                    </Text>
                </View>
            </View>
        </BoxShadow>
    )
}

export const Header = withNavigation(HeaderWithoutNavigation)