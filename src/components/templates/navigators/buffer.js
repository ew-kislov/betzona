const TabNavigator = createMaterialTopTabNavigator(
    {
        'Все': {
            screen: AllPrognosisListTabContainer,
        },
        'Футбол': {
            screen: FootballPrognosisListTabContainer,
            navigationOptions: {
                tabBarIcon: ({ focused }) =>
                    <FootballBlueIcon />
            }
        },
        'Теннис': {
            screen: TennisPrognosisListTabContainer,
            navigationOptions: {
                tabBarIcon: ({ focused }) =>
                    focused ? <TennisBlueIcon /> : <TennisIcon />
            }
        },
        'Хоккей': {
            screen: HockeyPrognosisListTabContainer,
            navigationOptions: {
                tabBarIcon: ({ focused }) =>
                    focused ? <HockeyBlueIcon /> : <HockeyIcon />
            }
        }
    },
    {
        tabBarOptions: {
            scrollEnabled: true,
            activeTintColor: '#45ade1',
            inactiveTintColor: '#767676',
            style: {
                backgroundColor: '#f6f6f6',
                shadowOpacity: 0.3,
                shadowRadius: 6,
                shadowOffset: {
                    height: 0,
                    width: 0
                },
            },
            indicatorStyle: {
                backgroundColor: '#45ade1',
            },
            tabStyle: {
                height: 50,
                width: 140,
                flexDirection: 'row',
                // alignContent: 'center',
                // justifyContent: 'center',
                // textAlign: 'center',
                // alignSelf: 'center'
            },
            labelStyle: {
                fontFamily: 'PTSans-NarrowBold',
                textTransform: 'capitalize',
                fontSize: 16,
                alignSelf: 'center',
                marginRight: 10
            },
            showIcon: true
        }
    })