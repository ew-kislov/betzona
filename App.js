import React, { Component } from 'react'
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation'
import SplashScreen from 'react-native-splash-screen'

import { Provider } from 'react-redux'
import { configureStore } from './src/config'

import { PrognosisDetailsContainer, PrognosisListContainer, SideMenuContainer, ProfileInfoContainer } from './src/components/screens'

import { SCREENS } from './src/constants'

import { connect } from 'react-redux'
import { initAuthDataActionCreator } from './src/store'

const stackNavigator = createStackNavigator(
    {
        [SCREENS.PROGNOSIS_LIST]: PrognosisListContainer,
        [SCREENS.PROGNOSIS_DETAILS]: PrognosisDetailsContainer,
        [SCREENS.PROFILE_INFO]: ProfileInfoContainer
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
        this.props.initAuthDataActionCreator().then(() => SplashScreen.hide())
    }

    render() {
        return (
            // <Provider store={store}>
            <AppContainer />
            // </Provider>
        )
    }
}

const AppWithConnect = connect(null, { initAuthDataActionCreator })(AppWithoutConnect)

export default App = () => <Provider store={store}><AppWithConnect /></Provider>