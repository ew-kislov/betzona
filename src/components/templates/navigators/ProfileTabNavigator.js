import React, { Component } from 'react';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';

import { ProfilePrognosisListTabContainer } from '../tabs/profile_prognosis_list_tab/ProfilePrognosisListTabContainer';
import { ProfileStatisticsTabContainer } from '../tabs/profile_statistics_tab/ProfileStatisticsTabContainer';

export class ProfileTabNavigator extends Component {

    componentWillMount() {
        const TabNavigator = createMaterialTopTabNavigator(
            {
                'Прогнозы': ProfilePrognosisListTabContainer,
                'Статистика': ProfileStatisticsTabContainer
            },
            {
                tabBarOptions: {
                    scrollEnabled: true,
                    activeTintColor: '#45ade1',
                    inactiveTintColor: '#f6f6f6',
                    style: {
                        backgroundColor: '#f6f6f6',
                    },
                    indicatorStyle: {
                        backgroundColor: '#45ade1',
                        color: '#45ade1'
                    },
                    tabStyle: {
                        height: 50,
                        width: 140
                    },
                    labelStyle: {
                        fontFamily: 'PTSans-NarrowBold',
                        textTransform: 'capitalize',
                        fontSize: 16,
                        alignSelf: 'center',
                        marginLeft: 8,
                        color: '#767676'
                    }
                }
            }
        )

        this.ProfileTabNavigatorContainer = createAppContainer(TabNavigator)
    }

    render() {
        return <this.ProfileTabNavigatorContainer screenProps={this.props.screenProps} />
    }
}