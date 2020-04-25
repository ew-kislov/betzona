import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
    panel: {
        backgroundColor: '#FFFFFF',
        borderRadius: 3,
        margin: 0,
        padding: 12,
        paddingLeft: 20,
        paddingRight: 20,
        borderColor: '#cadbe1',
        borderWidth: 1
    },
    dividerPanel: {
        paddingTop: 15,
        paddingBottom: 15,
        borderTopColor: '#cadbe1',
        borderTopWidth: 1,
        borderBottomColor: '#cadbe1',
        borderBottomWidth: 1
    },
    dividerPanelLight: {
        paddingTop: 15,
        paddingBottom: 15,
        borderTopColor: '#e1eaec',
        borderTopWidth: 1,
        borderBottomColor: '#e1eaec',
        borderBottomWidth: 1
    },
    menuItem: {
        paddingTop: 7,
        paddingBottom: 7,
        flexDirection: 'row',
        alignItems: 'center'
    },
    grayPanel: {
        backgroundColor: '#FFFFFF',
        borderRadius: 3,
        margin: 0,
        paddingHorizontal: 15,
        borderColor: '#ebebeb',
        alignItems: 'center',
        borderWidth: 1
    },
    sliderPanel: {
        backgroundColor: '#EFEFF0',
        height: 40,
        borderRadius: 7,
        padding: 5,
        flexDirection: 'row'
    },
    shadowPanel: {
        alignSelf: 'center',
        backgroundColor: "#fff",
        borderRadius: 14,
        zIndex: 100000,
        width: '100%'
    }
})