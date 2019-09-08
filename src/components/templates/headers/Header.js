import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'

import { MenuIcon, BackIcon } from '../../primitives'
import { styles } from './styles.js'

export const HeaderWithoutNavigation = ({ navigation, customTitle, title, noShadow, back, menu }) => {
    return (
        <View style={noShadow ? styles.header_no_shadow : styles.header}>
            {back ?
                <TouchableOpacity style={styles.headerIcon} onPress={() => navigation.goBack()}>
                    <BackIcon />
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.headerIcon} onPress={() => navigation.openDrawer()}>
                    <MenuIcon />
                </TouchableOpacity>
            }

            <View style={styles.headerTitleView}>
                <Text style={[styles.headerText]}>
                    {customTitle ? (title || '') : navigation.state.routeName}
                </Text>
            </View>
        </View>
    )
}

export const Header = withNavigation(HeaderWithoutNavigation)