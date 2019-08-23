import { Dimensions, Platform } from 'react-native'

SCREEN_WIDTH = Dimensions.get('window').width
SCREEN_HEIGHT = Dimensions.get('window').height

export const styles = {
    flex1: {
        flex: 1
    },
    centerContainer: {
        padding: 10,
        paddingBottom: 0,
        paddingTop: 0,
    },
    container: {
        backgroundColor: '#FFF',
        width: SCREEN_WIDTH,
        height: Platform.OS === 'android' ? SCREEN_HEIGHT - 24 : SCREEN_HEIGHT - 40,
    },
}