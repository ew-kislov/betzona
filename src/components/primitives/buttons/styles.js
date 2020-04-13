import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    primaryButton: {
        padding: 9,
        borderRadius: 5,
        textAlign: 'center',
        width: 90,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#45ade1'
    },
    primaryButtonText: {
        fontSize: 16,
        fontFamily: 'PTSans-NarrowBold',
        color: "#fff"
    },

    outlinedButton: {
        padding: 9,
        borderRadius: 5,
        textAlign: 'center',
        width: 90,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#45ade1'
    },
    outlinedButtonText: {
        fontSize: 16,
        fontFamily: 'PTSans-NarrowBold',
        color: "#45ade1"
    },

    rateButton: {
        padding: 9,
        borderRadius: 2.5,
        textAlign: 'center',
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rateButtonText: {
        fontSize: 16,
        fontFamily: 'PTSans-NarrowBold',
        color: "#fff"
    },

    timeButton: {
        height: 36,
        borderRadius: 2.5,
        textAlign: 'center',
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    timeButtonText: {
        fontSize: 18,
        fontFamily: 'PTSans-Narrow',
        color: "#fff"
    },

    widePrimaryButton: {
        padding: 14,
        borderRadius: 5,
        backgroundColor: '#45ade1',
        alignItems: 'center'
    },
    widePrimaryButtonInactive: {
        padding: 14,
        borderRadius: 5,
        backgroundColor: '#ccc',
        alignItems: 'center'
    },
    widePrimaryButtonText: {
        fontSize: 15,
        fontFamily: 'PTSans-NarrowBold',
        color: "#fff"
    },
    iconPrimaryButton: {
        padding: 12,
        borderRadius: 5,
        backgroundColor: '#45ade1',
        alignItems: 'center',
        justifyContent: 'center'
    },

    oddRateButton: {
        alignItems: 'center',
        flex: 1
    },
    oddRateButtonText: {
        fontSize: 14,
        fontFamily: 'PTSans-NarrowBold',
        color: "#fff"
    },
    oddRateButtonLeft: {
        backgroundColor: '#66a8cb',
        flex: 1,
        alignItems: 'center',
        padding: 8,
        borderBottomLeftRadius: 3,
        borderTopLeftRadius: 3
    },
    oddRateButtonRight: {
        backgroundColor: '#5990ae',
        width: 80,
        alignItems: 'center',
        padding: 8,
        borderBottomRightRadius: 3,
        borderTopRightRadius: 3
    },
    sliderButton: {
        flex: 1,
        flexGrow: 1,
        backgroundColor: '#fff',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        flexDirection: 'row'
    },
    sliderButtonInactive: {
        flex: 1,
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    sliderButtonText: {
        fontSize: 13,
        fontFamily: 'PTSans-Narrow',
        color: "#45ADE2",
    },
    sliderButtonInactiveText: {
        fontSize: 13,
        fontFamily: 'PTSans-Narrow',
        color: "#828a92",
    },
    sportTabButton: {
        height: 64,
        width: 64,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 14,
        backgroundColor: '#45ADE2',
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    },
    sportTabButtonInactive: {
        height: 64,
        width: 64,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 14,
        borderColor: '#EFEFEF',
        borderWidth: 1
    }
})