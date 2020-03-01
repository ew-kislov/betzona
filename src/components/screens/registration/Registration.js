import React from 'react'
import { View } from 'react-native'

import {
    ScreenLayout,
    Header,
    ContentLayout,
} from '../../templates'
import { PrimaryInput, WidePrimaryButton } from '../../primitives'

export const Registration = ({ handleUsernameChange, handleEmailChange, handlePasswordChange, handleRegistration }) => {
    return (
        <ScreenLayout>
            <Header menu />
            <ContentLayout>
                <PrimaryInput onChangeText={handleUsernameChange} style={{ marginTop: 20 }} placeholder='Логин' />
                <PrimaryInput onChangeText={handleEmailChange} style={{ marginTop: 20 }} placeholder='Email' />
                <PrimaryInput onChangeText={handlePasswordChange} style={{ marginTop: 20 }} placeholder='Пароль' secureTextEntry={true} />
                <WidePrimaryButton onPress={handleRegistration} style={{ marginTop: 20 }} isActive={true}>Зарегистрироваться</WidePrimaryButton>
            </ContentLayout>
        </ScreenLayout>
    )
}