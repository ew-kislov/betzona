import { Linking } from 'react-native'

export function openUrlInBrowser(url) {
    Linking.canOpenURL(url)
        .then(isSupported => {
            if (isSupported)
                Linking.openURL(url)
            else
                Alert.alert('', 'Не получилось открыть браузер, попробуйте позже.')
        })
}