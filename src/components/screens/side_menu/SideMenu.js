import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-ionicons'

import {
    PrimaryInput,
    WidePrimaryButton,
    RowContainer,
    PrimaryTitleText,
    MenuItem,
    PrimaryUnderlinedText,
    CloseIcon
} from '../../primitives'
import { ContentLayout } from '../../templates'
import { styles } from '../styles'

export const SideMenu = ({
    loading,
    token,
    username,
    profileBank,
    closeDrawer,
    handleUsernameChange,
    handlePasswordChange,
    handleLogin,
    handleLogout,
    navigateToProfileInfo,
    navigateToRating,
    navigateToPrognosis,
    navigateToAddPrognosis,
    navigateToRegistration
}) => {
    return (
        <ContentLayout style={{ padding: 20 }} loading={loading}>
            <SafeAreaView />
            <TouchableOpacity onPress={closeDrawer}>
                <CloseIcon />
            </TouchableOpacity>
            <View style={{ marginTop: 10 }}>
                {
                    token ?
                        (
                            <View style={styles.loggedPanel}>
                                <RowContainer>
                                    <Text style={styles.sideMenuBoldText}>Вы авторизовались как: </Text>
                                    <PrimaryTitleText>{username}</PrimaryTitleText>
                                </RowContainer>
                                <RowContainer style={{ marginTop: 10 }}>
                                    <Text style={styles.sideMenuText}>Доступно: </Text>
                                    <Text style={styles.sideMenuBoldText}>{profileBank.available + '€'}</Text>
                                </RowContainer>
                                <RowContainer style={{ marginTop: 5, marginBottom: 10 }}>
                                    <Text style={styles.sideMenuText}>Банк: </Text>
                                    <Text style={styles.sideMenuBoldText}>{profileBank.bank + '€'}</Text>
                                </RowContainer>
                            </View>
                        )
                        :
                        (
                            <View>
                                <Text style={styles.sideMenuBoldText}>Авторизация</Text>
                                <PrimaryInput onChangeText={handleUsernameChange} style={{ marginTop: 20 }} placeholder="Логин" />
                                <PrimaryInput onChangeText={handlePasswordChange} style={{ marginTop: 20 }} placeholder="Пароль" secureTextEntry={true} />
                                <WidePrimaryButton onPress={handleLogin} style={{ marginTop: 20 }} isActive={true}>Войти</WidePrimaryButton>
                                <TouchableOpacity onPress={navigateToRegistration} style={{ marginTop: 10, padding: 5 }}>
                                    <PrimaryUnderlinedText style={{ alignSelf: 'center' }}>Или зарегистрироваться</PrimaryUnderlinedText>
                                </TouchableOpacity>
                            </View>
                        )
                }

                <MenuItem onPress={navigateToPrognosis} style={{ marginTop: 5 }}>
                    <Icon name="md-home" color='#394f68' size={21} />
                    <Text style={[styles.sideMenuText, { marginLeft: 15 }]}>Прогнозы на спорт</Text>
                </MenuItem>

                <MenuItem onPress={navigateToRating} style={{ marginTop: 5 }}>
                    <Icon name="md-star" color='#394f68' size={21} />
                    <Text style={[styles.sideMenuText, { marginLeft: 15 }]}>Рейтинг игроков за месяц</Text>
                </MenuItem>

                {
                    token && (
                        <View>
                            <MenuItem onPress={navigateToProfileInfo} style={{ marginTop: 5 }}>
                                <Icon name="md-person" color='#394f68' size={21} />
                                <Text style={[styles.sideMenuText, { marginLeft: 15 }]}>Открыть профиль</Text>
                            </MenuItem>

                            <MenuItem onPress={navigateToAddPrognosis} style={{ marginTop: 5 }}>
                                <Icon name="md-add" color='#394f68' size={21} />
                                <Text style={[styles.sideMenuText, { marginLeft: 15 }]}>Добавить прогноз</Text>
                            </MenuItem>

                            <WidePrimaryButton onPress={handleLogout} style={{ marginTop: 20 }} isActive={true} text="Войти">Выйти</WidePrimaryButton>
                        </View>
                    )
                }

            </View>
        </ContentLayout >
    )
}