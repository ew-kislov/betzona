import React from 'react'

import {
    ScreenLayout,
    Header,
    ContentLayout,
} from '../../templates'
import { PrimaryInput, WidePrimaryButton, OutlineButton } from '../../primitives'

export const Registration = ({
    handleUsernameChange,
    handleEmailChange,
    handlePasswordChange,
    handleRegistration,
    loading
}) => {
    return (
        <ScreenLayout>
            <Header back />
            <ContentLayout>
                <PrimaryInput onChangeText={handleUsernameChange} style={{ marginTop: 20 }} placeholder='Логин' />
                <PrimaryInput onChangeText={handleEmailChange} style={{ marginTop: 20 }} placeholder='Email' />
                <PrimaryInput onChangeText={handlePasswordChange} style={{ marginTop: 20 }} placeholder='Пароль' secureTextEntry={true} />
                <OutlineButton onPress={handleRegistration} disabled={loading} style={{ marginTop: 20 }} isActive={true}>Зарегистрироваться</OutlineButton>
            </ContentLayout>
        </ScreenLayout>
    )
}