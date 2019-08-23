import { Dimensions, Platform } from 'react-native'

SCREEN_WIDTH = Dimensions.get('window').width

export const styles = {
    header: {
        height: 54,
        zIndex: 100,
        width: SCREEN_WIDTH,
        flexDirection: 'row',
        backgroundColor: '#f6f6f6',
        alignItems: 'center',
        margin: 0,
        shadowOpacity: 0.3,
        shadowRadius: 6,
        shadowOffset: {
            height: 0,
            width: 0
        },
        elevation: 4
    },
    header_no_shadow: {
        height: 54,
        zIndex: 100,
        width: SCREEN_WIDTH,
        flexDirection: 'row',
        backgroundColor: '#f6f6f6',
        alignItems: 'center',
        margin: 0,
    },
    headerIcon: {
        padding: 15,
        paddingLeft: 20,
        paddingRight: 20
    },
    headerTitleView: {
        marginLeft: 6,
        marginBottom: 1,
        width: SCREEN_WIDTH

    },
    headerText: {
        fontFamily: 'PTSans-NarrowBold',
        fontSize: 22,
        color: '#767676',
        marginRight: 40
    }
}