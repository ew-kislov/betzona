import { Dimensions, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    prognosePanel: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: Dimensions.get('screen').width - 30,
        height: 165,
        alignSelf: 'center',
        backgroundColor: "#fff",
        borderRadius: 14
    },
    prognoseSection: {
        flexGrow: 1,
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
    },
    prognosisBottom: {
        borderTopWidth: 1,
        borderTopColor: '#e9e9e9',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 45,
        width: '86%'
    },
    VSPanel: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    VSText: {
        flexGrow: 1,
        fontFamily: 'PTSans-Narrow',
        fontSize: 12,
        color: '#1B2939',
        textAlign: 'center',
        opacity: 0.3
    },
    VSMiddle: {
        flexGrow: 1,
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1
    },
    divider: {
        height: 1,
        flexGrow: 1,
        backgroundColor: '#E2E2E2'
    },
    VSImage: {
        width: 70,
        height: 70,
        resizeMode: 'contain'
    },
    logoImage: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        marginTop: 5
    },
    VSImageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        flex: 1
    },
    indicator: {
        width: 10,
        height: 10,
        borderRadius: 30,
        margin: 5
    },
    oddPayment: {
        borderTopWidth: 1,
        borderTopColor: '#E2E2E2',
        marginTop: 10,
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center'
    },
    itemPanel: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#E2E2E2',
        padding: 12
    },
    chosenPrognosisPanel: {
        padding: 20,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        height: 86,
        alignSelf: 'center'
    },
    chosenPrognosisPanelTopText: {
        fontSize: 14,
        fontFamily: 'PTSans-NarrowBold',
        color: "#fff"
    },
    chosenPrognosisPanelBottomText: {
        fontSize: 16,
        fontFamily: 'PTSans-NarrowBold',
        color: "#fff"
    },
    inactiveSum: {
        width: 64,
        height: 64,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 6,
        borderRadius: 50,
        backgroundColor: '#ECECEC'
    },
    activeSum: {
        width: 64,
        height: 64,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 6,
        borderRadius: 50,
        backgroundColor: '#45ADE2'
    },
    inactiveSumText: {
        fontSize: 16,
        fontFamily: 'PTSans-NarrowBold',
        color: '#1B2939'
    },
    activeSumText: {
        fontSize: 16,
        fontFamily: 'PTSans-NarrowBold',
        color: '#fff'
    },
    sportImage: {
        width: 40,
        height: 40,
        marginLeft: 10,
        resizeMode: 'contain'
    },
    profileBetSumText: {
        fontSize: 14,
        fontFamily: 'PTSans-Narrow',
        color: '#222'
    },
    profileBetResultText: {
        fontSize: 14,
        fontFamily: 'PTSans-Narrow',
        color: '#666'
    },
    profileSumResultText: {
        fontSize: 14,
        fontFamily: 'PTSans-Narrow',
        padding: 2,
        color: '#fff'
    },
    resultIndicator: {
        width: 20,
        height: 20,
        borderRadius: 4,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    indicatorText: {
        fontSize: 14,
        fontFamily: 'PTSans-NarrowBold',
        color: '#ffffff'
    },
    rateButton: {
        height: 24,
        width: 43,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center'
    }
})