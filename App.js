import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { createStackNavigator, createAppContainer, createDrawerNavigator, SafeAreaView } from 'react-navigation'
import SplashScreen from 'react-native-splash-screen'

import { Provider } from 'react-redux'
import { configureStore } from './src/config'

import {
    PrognosisDetailsContainer,
    PrognosisListContainer,
    SideMenuContainer,
    ProfileInfoContainer,
    ChooseSportContainer,
    ChooseTournamentContainer,
    ChooseMatchContainer,
    ChooseOddContainer,
    ChooseMoneyContainer
} from './src/components/screens'

import { SCREENS } from './src/constants'

import { connect } from 'react-redux'
import { initAuthDataActionCreator, getProfileBankActionCreator } from './src/store'

const stackNavigator = createStackNavigator(
    {
        [SCREENS.PROGNOSIS_LIST]: PrognosisListContainer,
        [SCREENS.PROGNOSIS_DETAILS]: PrognosisDetailsContainer,
        [SCREENS.PROFILE_INFO]: ProfileInfoContainer,
        [SCREENS.CHOOSE_SPORT]: ChooseSportContainer,
        [SCREENS.CHOOSE_TOURNAMENT]: ChooseTournamentContainer,
        [SCREENS.CHOOSE_MATCH]: ChooseMatchContainer,
        [SCREENS.CHOOSE_ODD]: ChooseOddContainer,
        [SCREENS.CHOOSE_MONEY]: ChooseMoneyContainer
    },
    {
        initialRouteName: SCREENS.PROGNOSIS_LIST,
        headerMode: 'none'
    }
)

const appNavigator = createDrawerNavigator(
    {
        'APP': stackNavigator
    },
    {
        contentComponent: SideMenuContainer
    }
)

const AppContainer = createAppContainer(appNavigator)

const store = configureStore()

class AppWithoutConnect extends Component {

    componentDidMount() {
        this.props.initAuthDataActionCreator()
            .then(() => this.props.getProfileBankActionCreator(this.props.token))
            .then(() => SplashScreen.hide())
    }

    render() {
        return (
            <SafeAreaView backgroundColor='#00000040' style={{ flex: 1, color: '#767676' }} forceInset={{ bottom: 'never' }}>
                <StatusBar backgroundColor='#00000040' barStyle="light-content" />
                <AppContainer />
            </SafeAreaView>
        )
    }
}

mapStateToProps = state => ({
    token: state.auth.token
})
const AppWithConnect = connect(mapStateToProps, { initAuthDataActionCreator, getProfileBankActionCreator })(AppWithoutConnect)

export default App = () => <Provider store={store}><AppWithConnect /></Provider>