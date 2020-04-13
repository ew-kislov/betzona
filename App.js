import React, { Component } from 'react'
import { StatusBar, Dimensions } from 'react-native'
import { createStackNavigator, createAppContainer, createDrawerNavigator, SafeAreaView, createBottomTabNavigator } from 'react-navigation'
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
    ChooseMoneyContainer,
    RatingContainer,
    RegistrationContainer,
    EmailVerificationContainer
} from './src/components/screens'

import { SCREENS } from './src/constants'

import { connect } from 'react-redux'
import { initAuthDataActionCreator, getProfileBankActionCreator } from './src/store'

const prognosisNavigator = createStackNavigator(
    {
        [SCREENS.PROGNOSIS_LIST]: PrognosisListContainer,
        [SCREENS.PROGNOSIS_DETAILS]: PrognosisDetailsContainer
    },
    {
        initialRouteName: SCREENS.PROGNOSIS_LIST,
        headerMode: 'none'
    }
)

const profileNavigator = createStackNavigator(
    {
        [SCREENS.PROFILE_INFO]: ProfileInfoContainer,
        [SCREENS.REGISTRATION]: RegistrationContainer,
        [SCREENS.EMAIL_VERIFICATION]: EmailVerificationContainer
    },
    {
        initialRouteName: SCREENS.PROFILE_INFO,
        headerMode: 'none'
    }
)

const ratingNavigator = createStackNavigator(
    {
        [SCREENS.RATING]: RatingContainer,
    },
    {
        initialRouteName: SCREENS.RATING,
        headerMode: 'none'
    }
)

const addPrognosisNavigator = createStackNavigator(
    {
        [SCREENS.CHOOSE_SPORT]: ChooseSportContainer,
        [SCREENS.CHOOSE_TOURNAMENT]: ChooseTournamentContainer,
        [SCREENS.CHOOSE_MATCH]: ChooseMatchContainer,
        [SCREENS.CHOOSE_ODD]: ChooseOddContainer,
        [SCREENS.CHOOSE_MONEY]: ChooseMoneyContainer
    },
    {
        initialRouteName: SCREENS.CHOOSE_SPORT,
        headerMode: 'none'
    }
)

const tabbarVisible = (navigation) => {
    const { routes } = navigation.state;

    let showTabbar = true;
    routes.forEach((route) => {
        if (route.routeName === SCREENS.PROGNOSIS_DETAILS) {
            showTabbar = false;
        }
    });

    return showTabbar;
};

const stackNavigator = createBottomTabNavigator(
    {
        'Home': {
            navigationOptions: ({ navigation }) => ({
                tabBarVisible: tabbarVisible(navigation),
            }),
            screen: prognosisNavigator
        },
        'Rating': ratingNavigator,
        'Add': addPrognosisNavigator,
        'Profile': profileNavigator,
    },
    {
        initialRouteName: 'Home'
    }
)

const appNavigator = createDrawerNavigator(
    {
        'APP': stackNavigator
    },
    {
        contentComponent: SideMenuContainer,
        drawerWidth: Dimensions.get('window').width
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
            <SafeAreaView backgroundColor='#fff' style={{ flex: 1, color: '#767676' }} forceInset={{ bottom: 'never' }}>
                <StatusBar backgroundColor='#fff' barStyle="dark-content" />
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