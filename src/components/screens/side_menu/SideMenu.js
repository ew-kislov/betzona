import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'

import {
    RowContainer,
    MenuItem,
    CloseIcon,
    LogoIcon,
    PhoneIcon,
    DrawerHomeIcon,
    DrawerRatingIcon,
    DrawerAddIcon,
    DrawerProfileIcon,
    DrawerLogoutIcon,
    SubdescriptionText
} from '../../primitives'
import { ContentLayout } from '../../templates'
import { styles } from '../styles'

export const SideMenu = ({
    loading,
    token,
    profileBank,
    closeDrawer,
    handleLogout,
    navigateToProfileInfo,
    navigateToRating,
    navigateToPrognosis,
    navigateToAddPrognosis,
}) => {
    return (
        <View style={{ flex: 1 }}>
            <ContentLayout style={{ padding: 20, paddingTop: 30, zIndex: 10000 }} loading={loading}>
                <SafeAreaView />

                <RowContainer style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <LogoIcon />
                    <TouchableOpacity onPress={closeDrawer}>
                        <CloseIcon />
                    </TouchableOpacity>
                </RowContainer>

                <View style={{ marginTop: 10 }}>
                    {
                        token &&
                        (
                            <View>
                                <RowContainer style={{ marginTop: 10 }}>
                                    <SubdescriptionText>Доступно: </SubdescriptionText>
                                    <Text style={styles.sideMenuBoldText}>{profileBank.available + '€'}</Text>
                                </RowContainer>
                                <RowContainer style={{ marginTop: 5, marginBottom: 10 }}>
                                    <SubdescriptionText>Банк: </SubdescriptionText>
                                    <Text style={styles.sideMenuBoldText}>{profileBank.bank + '€'}</Text>
                                </RowContainer>
                            </View>
                        )
                    }

                    <MenuItem onPress={navigateToPrognosis} style={{ marginTop: 20 }}>
                        <DrawerHomeIcon />
                        <Text style={[styles.sideMenuText, { marginLeft: 12 }]}>Прогнозы на спорт</Text>
                    </MenuItem>

                    <MenuItem onPress={navigateToRating} style={{ marginTop: 5 }}>
                        <DrawerRatingIcon />
                        <Text style={[styles.sideMenuText, { marginLeft: 12 }]}>Рейтинг игроков за месяц</Text>
                    </MenuItem>

                    <MenuItem onPress={navigateToProfileInfo} style={{ marginTop: 5 }}>
                        <DrawerAddIcon />
                        <Text style={[styles.sideMenuText, { marginLeft: 12 }]}>Открыть профиль</Text>
                    </MenuItem>

                    <MenuItem onPress={navigateToAddPrognosis} style={{ marginTop: 5 }}>
                        <DrawerProfileIcon />
                        <Text style={[styles.sideMenuText, { marginLeft: 12 }]}>Добавить прогноз</Text>
                    </MenuItem>

                </View>
            </ContentLayout>

            {
                token &&
                (
                    <TouchableOpacity style={{ position: 'absolute', bottom: 30, alignSelf: 'center', zIndex: 100000 }} onPress={handleLogout}>
                        <RowContainer style={{ alignItems: 'center' }}>
                            <DrawerLogoutIcon />
                            <Text style={[styles.sideMenuBoldText, { marginLeft: 15 }]}>Выйти из аккаунта</Text>
                        </RowContainer>
                    </TouchableOpacity>
                )
            }

            <PhoneIcon style={{ position: 'absolute', right: 0, zIndex: 1 }} />
        </View>
    )
}