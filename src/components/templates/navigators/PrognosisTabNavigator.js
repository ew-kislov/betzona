import React from 'react'

import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'

import {
    AllPrognosisListTabContainer,
    FootballPrognosisListTabContainer,
    TennisPrognosisListTabContainer,
    HockeyPrognosisListTabContainer
} from '../tabs'
import { TabAll, TabAllActive, TabFootball, TabFootballActive, SportTabButton, TabTennis, TabTennisActive, TabHockey, TabHockeyActive } from '../../primitives'

import { SPORT_TYPES } from '../../../constants'

const TabNavigator = createMaterialTopTabNavigator(
    {
        [SPORT_TYPES.ALL]: {
            screen: AllPrognosisListTabContainer,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (<SportTabButton isActive={tintColor == '#45ADE2'} icon={tintColor == '#45ADE2' ? <TabAllActive /> : <TabAll />} />)
            }
        },
        [SPORT_TYPES.FOOTBALL]: {
            screen: FootballPrognosisListTabContainer,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (<SportTabButton isActive={tintColor == '#45ADE2'} icon={tintColor == '#45ADE2' ? <TabFootballActive /> : <TabFootball />} />)
            }
        },
        [SPORT_TYPES.TENNIS]: {
            screen: TennisPrognosisListTabContainer,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (<SportTabButton isActive={tintColor == '#45ADE2'} icon={tintColor == '#45ADE2' ? <TabTennisActive /> : <TabTennis />} />)
            }
        },
        [SPORT_TYPES.HOCKEY]: {
            screen: HockeyPrognosisListTabContainer,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (<SportTabButton isActive={tintColor == '#45ADE2'} icon={tintColor == '#45ADE2' ? <TabHockeyActive /> : <TabHockey />} />)
            }
        }
    },
    {
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
            scrollEnabled: true,
            activeTintColor: '#45ADE2',
            inactiveTintColor: '#fff',
            style: {
                backgroundColor: '#fff',
                elevation: 0,
                shadowOpacity: 0,
                marginTop: 10,
                marginHorizontal: 5,
                height: 84,
                justifyContent: 'center'
            },
            tabStyle: {
                width: 84,
                height: 64,
                padding: 5,
                alignContent: 'center',
                justifyContent: 'center'
            },
            indicatorStyle: {
                opacity: 0
            },
            showIcon: true,
            showLabel: false
        },
    }
)

export const PrognosisTabNavigator = createAppContainer(TabNavigator)