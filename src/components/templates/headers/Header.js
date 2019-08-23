import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'

import { MenuIcon, BackIcon } from '../../primitives'
import { styles } from './styles.js'

// import { SCREENS } from '../../../constants'

// TODO: add menu navigation

export const HeaderWithoutNavigation = ({ navigation, customTitle, title, noShadow, back, menu }) => {
    return (
        <View style={noShadow ? styles.header_no_shadow : styles.header}>
            { back && <TouchableOpacity
                style={styles.headerIcon}
                onPress={menu ? () => {} : () => navigation.goBack()}
            >
               <BackIcon />
            </TouchableOpacity>}

            <View style={styles.headerTitleView}>
                <Text style={[styles.headerText, menu && { marginLeft: 20 }]}>
                    {customTitle ? (title || '') : navigation.state.routeName}
                </Text>
            </View>
        </View>
    )
}

export const Header = withNavigation(HeaderWithoutNavigation)