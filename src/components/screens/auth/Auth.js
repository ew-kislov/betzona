import React from 'react'
import { TouchableOpacity } from 'react-native'

import {
    ScreenLayout,
    Header,
    ContentLayout,
} from '../../templates'
import { TitleText, PrimaryInput, OutlineButton, DescriptionText } from '../../primitives'

export const Auth = ({
    navigateToRegistration,
    handleUsernameChange,
    handlePasswordChange,
    handleLogin,
    loading,
}) => {
    return (
        <ScreenLayout>
            <Header menu />
            <ContentLayout loading={loading} style={{ marginBottom: 20, marginTop: 20 }}>
                <TitleText style={{ marginTop: 100, textAlign: 'center' }}>Авторизация</TitleText>
                <PrimaryInput
                    style={[{ marginTop: 20, flex: 1, marginHorizontal: 20 }]}
                    placeholder='Логин'
                    onChangeText={handleUsernameChange}
                />
                <PrimaryInput
                    style={[{ marginTop: 20, flex: 1, marginHorizontal: 20 }]}
                    placeholder='Пароль'
                    onChangeText={handlePasswordChange}
                    secureTextEntry={true}
                />

                <OutlineButton onPress={handleLogin} style={{ marginTop: 20, flex: 1, marginHorizontal: 20 }}>Войти</OutlineButton>

                <TouchableOpacity onPress={navigateToRegistration}>
                    <DescriptionText style={{ marginTop: 20, textAlign: 'center' }}>Или зарегистрироваться</DescriptionText>
                </TouchableOpacity>
            </ContentLayout>
        </ScreenLayout>
    )
}