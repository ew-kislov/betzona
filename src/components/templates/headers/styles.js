import { Dimensions, Platform } from 'react-native'

SCREEN_WIDTH = Dimensions.get('window').width

export const styles = {
    header: {
        height: 54,
        zIndex: 100,
        width: SCREEN_WIDTH,
        flexDirection: 'row',
        backgroundColor: '#ааа',
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
    }
}