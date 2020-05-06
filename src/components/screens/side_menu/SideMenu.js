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
    available,
    bank,
    closeDrawer,
    handleLogout,
    navigateToProfileInfo,
    navigateToRating,
    navigateToPrognosis,
    navigateToAddPrognosis,
}) => {
    return (
        <View style={{ flex: 1 }}>
            <ContentLayout style={{ padding: 20, paddingTop: 30, zIndex: 10 }} loading={loading}>
                <SafeAreaView />

                <LogoIcon />

                <View style={{ marginTop: 10 }}>
                    {
                        token &&
                        (
                            <View>
                                <RowContainer style={{ marginTop: 10 }}>
                                    <SubdescriptionText>Доступно: </SubdescriptionText>
                                    <Text style={styles.sideMenuBoldText}>{available + '€'}</Text>
                                </RowContainer>
                                <RowContainer style={{ marginTop: 5, marginBottom: 10 }}>
                                    <SubdescriptionText>Банк: </SubdescriptionText>
                                    <Text style={styles.sideMenuBoldText}>{bank + '€'}</Text>
                                </RowContainer>
                            </View>
                        )
                    }

                    <MenuItem onPress={navigateToPrognosis} style={{ marginTop: 20 }}>
                        <DrawerHomeIcon />
                        <Text style={[styles.sideMenuText, { marginLeft: 12 }]}>Прогнозы на спорт</Text>
                    </MenuItem>

                    <MenuItem onPress={navigateToRating} style={{ marginTop: 15 }}>
                        <DrawerRatingIcon />
                        <Text style={[styles.sideMenuText, { marginLeft: 12 }]}>Рейтинг игроков за месяц</Text>
                    </MenuItem>

                    {
                        token &&
                        (
                            <View>
                                <MenuItem onPress={navigateToProfileInfo} style={{ marginTop: 15 }}>
                                    <DrawerAddIcon />
                                    <Text style={[styles.sideMenuText, { marginLeft: 12 }]}>Открыть профиль</Text>
                                </MenuItem>

                                <MenuItem onPress={navigateToAddPrognosis} style={{ marginTop: 15 }}>
                                    <DrawerProfileIcon />
                                    <Text style={[styles.sideMenuText, { marginLeft: 12 }]}>Добавить прогноз</Text>
                                </MenuItem>
                            </View>
                        )
                    }

                </View>
            </ContentLayout>

            <TouchableOpacity style={{ position: 'absolute', top: 30, right: 30, zIndex: 100000 }} onPress={closeDrawer}>
                <CloseIcon />
            </TouchableOpacity>

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