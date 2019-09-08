import React from 'react'
import { SafeAreaView, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-ionicons'

import { PrimaryInput, WidePrimaryButton, TitleText, RowContainer, PrimaryTitleText, DividerPanel, PrimaryIconButton } from '../../primitives'
import { ContentLayout } from '../../templates'

export const SideMenu = ({ loading, token, username, handleUsernameChange, handlePasswordChange, handleLogin, handleLogout }) => {
    return (
        <ContentLayout style={{ padding: 20 }} loading={loading}>
            <SafeAreaView />
            {
                token ?
                    (
                        <View>
                            <DividerPanel style={{ marginTop: 15 }}>
                                <RowContainer>
                                    <TitleText>Вы авторизовались как: </TitleText>
                                    <PrimaryTitleText>{username}</PrimaryTitleText>
                                </RowContainer>

                                <TouchableOpacity>
                                    <RowContainer style={{ marginTop: 10, alignItems: 'center' }}>
                                        <Icon name="md-person" color='#45ade1' size={21} style={{ marginRight: 15 }} />
                                        <PrimaryTitleText>Открыть профиль</PrimaryTitleText>
                                    </RowContainer>
                                </TouchableOpacity>

                                <PrimaryIconButton style={{ marginTop: 15 }} icon={<Icon name="md-add" color='#ffffff' size={22} />}>Добавить прогноз</PrimaryIconButton>
                            </DividerPanel>

                            <WidePrimaryButton onPress={handleLogout} style={{ marginTop: 20 }} isActive={true} text="Войти">Выйти</WidePrimaryButton>
                        </View>
                    ) :
                    (
                        <View>
                            <TitleText>Авторизация</TitleText>
                            <PrimaryInput onChangeText={handleUsernameChange} style={{ marginTop: 20 }} placeholder="Логин" />
                            <PrimaryInput onChangeText={handlePasswordChange} style={{ marginTop: 20 }} placeholder="Пароль" secureTextEntry={true} />
                            <WidePrimaryButton onPress={handleLogin} style={{ marginTop: 20 }} isActive={true} text="Войти">Войти</WidePrimaryButton>
                        </View>
                    )
            }
        </ContentLayout >
    )
}