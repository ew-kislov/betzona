import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'

import {
    AllPrognosisListTabContainer,
    FootballPrognosisListTabContainer,
    TennisPrognosisListTabContainer,
    HockeyPrognosisListTabContainer
} from '../tabs'
import { FootballIcon, FootballBlueIcon, TennisIcon, TennisBlueIcon, HockeyIcon, HockeyBlueIcon } from '../../primitives'

import { SPORT_TYPES } from '../../../constants'

class CustomTab extends React.PureComponent {
    render() {
        const { focused, routeName } = this.props

        let icon
        if (routeName == SPORT_TYPES.FOOTBALL)
            icon = focused ? <FootballBlueIcon /> : <FootballIcon />
        else if (routeName == SPORT_TYPES.TENNIS)
            icon = focused ? <TennisBlueIcon /> : <TennisIcon />
        else if (routeName == SPORT_TYPES.HOCKEY)
            icon = focused ? <HockeyBlueIcon /> : <HockeyIcon />

        return (
            <TouchableOpacity onPress={() => this.onSelect(routeName)} style={[tabStyles.container, focused ? tabStyles.active : tabStyles.inactive]}>
                <View>
                    {(routeName != SPORT_TYPES.ALL) && icon}
                </View>
                <Text style={[tabStyles.textStyle, focused ? tabStyles.activeText : tabStyles.inactiveText]}>{routeName}</Text>
            </TouchableOpacity>
        )
    }

    onSelect = (routeName) => {
        this.props.onPress(routeName)
    }
}

const tabStyles = StyleSheet.create({
    container: {
        marginTop: 5,
        flex: 1,
        flexGrow: 1,
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        height: 50,
        flexDirection: 'row',
    },
    active: {
        borderBottomWidth: 2,
        borderColor: '#45ade1'
    },
    inactive: {
        borderBottomWidth: 2,
        borderColor: '#f6f6f6'
    },
    textStyle: {
        fontFamily: 'PTSans-NarrowBold',
        textTransform: 'capitalize',
        fontSize: 16,
        alignSelf: 'center',
        marginLeft: 8
    },
    activeText: {
        color: '#45ade1'
    },
    inactiveText: {
        color: '#767676'
    }
});


class CustomTabBar extends React.Component {

    render() {
        const { navigation } = this.props;
        const routes = navigation.state.routes;

        return (
            <View horizontal={true} style={styles.container}>
                {routes.map((route, index) =>
                    <View style={styles.tabBarItem} key={index}>
                        <CustomTab
                            routeName={route.routeName}
                            onPress={() => this.navigationHandler(route.routeName)}
                            focused={navigation.state.index === index}
                            index={index}
                        />
                    </View>
                )}
            </View>
        )
    }

    navigationHandler = (routeName) => {
        this.props.navigation.navigate(routeName);
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        zIndex: 100,
        backgroundColor: '#f6f6f6',
        shadowOpacity: 0.3,
        shadowRadius: 6,
        shadowOffset: {
            height: 0,
            width: 0
        },
        elevation: 4,
        height: 50
    },
    tabBarItem: {
        flex: 1,
        alignItems: 'center'
    }
})

const TabNavigator = createMaterialTopTabNavigator(
    {
        [SPORT_TYPES.ALL]: AllPrognosisListTabContainer,
        [SPORT_TYPES.FOOTBALL]: FootballPrognosisListTabContainer,
        [SPORT_TYPES.TENNIS]: TennisPrognosisListTabContainer,
        [SPORT_TYPES.HOCKEY]: HockeyPrognosisListTabContainer
    },
    {
        tabBarComponent: CustomTabBar,
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
            scrollEnabled: true,
        },
    }
)

export const PrognosisTabNavigator = createAppContainer(TabNavigator)