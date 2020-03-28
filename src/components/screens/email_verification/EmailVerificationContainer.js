import React from 'react'

import {
    ScreenLayout,
    Header,
    ContentLayout,
} from '../../templates'
import { SubtitleText } from '../../primitives'
import { Text } from 'react-native'

export const EmailVerificationContainer = () => {
    return (
        <ScreenLayout>
            <Header menu />
            <ContentLayout>
                <SubtitleText style={{ textAlign: 'center', marginTop: 20 }}>На указанную почту мы отправили сообщение для активации аккаунта. Пожалуйста, проверьте вашу почту и активируйте аккаунт!</SubtitleText>
            </ContentLayout>
        </ScreenLayout>
    )
}