import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import Icon from 'react-native-ionicons'

import { PrimaryInput, WidePrimaryButton, RowContainer, PrimaryTitleText, MenuItem } from '../../primitives'
import { ContentLayout } from '../../templates'

export const SideMenu = ({ loading, token, username, handleUsernameChange, handlePasswordChange, handleLogin, handleLogout, navigateToProfileInfo, navigateToPrognosis, navigateToAddPrognosis }) => {
    return (
        <ContentLayout style={{ padding: 20 }} loading={loading}>
            <SafeAreaView />
            <View style={{ marginTop: 10 }}>
                {
                    token ?
                        (
                            <RowContainer>
                                <Text style={{ fontSize: 17, fontFamily: 'PTSans-NarrowBold', color: '#394f68' }}>Вы авторизовались как: </Text>
                                <PrimaryTitleText>{username}</PrimaryTitleText>
                            </RowContainer>
                        )
                        :
                        (
                            <View>
                                <Text style={{ fontSize: 17, fontFamily: 'PTSans-NarrowBold', color: '#394f68' }}>Авторизация</Text>
                                <PrimaryInput onChangeText={handleUsernameChange} style={{ marginTop: 20 }} placeholder="Логин" />
                                <PrimaryInput onChangeText={handlePasswordChange} style={{ marginTop: 20 }} placeholder="Пароль" secureTextEntry={true} />
                                <WidePrimaryButton onPress={handleLogin} style={{ marginTop: 20 }} isActive={true} text="Войти">Войти</WidePrimaryButton>
                            </View>
                        )
                }

                <MenuItem onPress={navigateToPrognosis} style={{ marginTop: 15 }}>
                    <Icon name="md-home" color='#394f68' size={21} />
                    <Text style={{ fontSize: 16, fontFamily: 'PTSans-Narrow', color: '#394f68', marginLeft: 15 }}>Прогнозы на спорт</Text>
                </MenuItem>

                {
                    token && (
                        <View>
                            <MenuItem onPress={navigateToProfileInfo} style={{ marginTop: 5 }}>
                                <Icon name="md-person" color='#394f68' size={21} />
                                <Text style={{ fontSize: 16, fontFamily: 'PTSans-Narrow', color: '#394f68', marginLeft: 15 }}>Открыть профиль</Text>
                            </MenuItem>

                            <MenuItem onPress={navigateToAddPrognosis} style={{ marginTop: 5 }}>
                                <Icon name="md-add" color='#394f68' size={21} />
                                <Text style={{ fontSize: 16, fontFamily: 'PTSans-Narrow', color: '#394f68', marginLeft: 15 }}>Добавить прогноз</Text>
                            </MenuItem>

                            <WidePrimaryButton onPress={handleLogout} style={{ marginTop: 20 }} isActive={true} text="Войти">Выйти</WidePrimaryButton>
                        </View>
                    )
                }

            </View>
        </ContentLayout >
    )
}