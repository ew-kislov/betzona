import React, { Component } from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import SplashScreen from 'react-native-splash-screen'

import { Provider } from 'react-redux'
import { configureStore } from './src/config'

import { PrognosisDetailsContainer, PrognosisListContainer } from './src/components/screens'

import { SCREENS } from './src/constants'

const navigator = createStackNavigator(
    {
        [SCREENS.PROGNOSIS_LIST]: PrognosisListContainer,
        [SCREENS.PROGNOSIS_DETAILS]: PrognosisDetailsContainer
    },
    {
        initialRouteName: SCREENS.PROGNOSIS_LIST,
        headerMode: 'none'
    }
)

const AppContainer = createAppContainer(navigator)

const store = configureStore()

export default class App extends Component {

    componentDidMount() {
        SplashScreen.hide()
    }
        
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        )
    }
}