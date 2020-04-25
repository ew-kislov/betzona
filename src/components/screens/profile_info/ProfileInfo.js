import React from 'react'

import {
    ScreenLayout,
    Header
} from '../../templates'
import { ProfileTabNavigator } from '../../templates/navigators/ProfileTabNavigator'
import { SliderButton, SliderPanel } from '../../primitives'
import { ProfileStatisticsTabContainer } from '../../templates/tabs/profile_statistics_tab/ProfileStatisticsTabContainer'
import { ProfilePrognosisListTabContainer } from '../../templates/tabs/profile_prognosis_list_tab/ProfilePrognosisListTabContainer'

export const ProfileInfo = ({ username, activeTab, setActiveTab }) => {
    return (
        <ScreenLayout>
            <Header customTitle={username ? true : false} title={username} back={username ? true : false} noShadow />
            <SliderPanel style={{ margin: 15 }}>
                <SliderButton isActive={activeTab == 'account'} onPress={() => setActiveTab('account')}>Аккаунт</SliderButton>
                <SliderButton isActive={activeTab == 'statistics'} onPress={() => setActiveTab('statistics')}>Статистика</SliderButton>
            </SliderPanel>

            {
                activeTab == 'account' ?
                    <ProfilePrognosisListTabContainer screenProps={{ username: username }} /> :
                    <ProfileStatisticsTabContainer screenProps={{ username: username }} />
            }
        </ScreenLayout>
    )
}