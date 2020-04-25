import { Dimensions, Platform } from 'react-native'

SCREEN_WIDTH = Dimensions.get('window').width

export const styles = {
    header: {
        height: 54,
        width: SCREEN_WIDTH,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        margin: 0,
    },
    headerIcon: {
        padding: 15,
    },
    headerTitleView: {
        marginLeft: 6,
        marginBottom: 1,
        width: SCREEN_WIDTH

    },
    headerText: {
        fontFamily: 'PTSans-NarrowBold',
        fontSize: 17,
        lineHeight: 22,
        color: '#1B2939',
        marginRight: 60,
        marginLeft: 20
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24
    }
}