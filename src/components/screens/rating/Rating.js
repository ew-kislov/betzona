import React from 'react'

import { ScreenLayout, Header, ContentLayout } from '../../templates'
import { View, TouchableOpacity } from 'react-native'
import { styles } from '../styles'
import { BoldText, SubdescriptionText, ThinText } from '../../primitives'

export const Rating = ({ loading, monthRating, showMore, elementsShown, currentUser, navigateToProfile }) => {
    return (
        <ScreenLayout>
            <Header menu />
            <ContentLayout scrollEndHanler={showMore} loading={loading}>
                <View style={styles.ratingItem}>
                    <BoldText style={{ flexGrow: 1, flex: 1 }}>#</BoldText>
                    <BoldText style={{ flexGrow: 5, flex: 1 }}>Игрок</BoldText>
                    <BoldText style={{ flexGrow: 2, flex: 1 }}>Ставок</BoldText>
                    <BoldText style={{ flexGrow: 2, flex: 1 }}>ROI</BoldText>
                    <BoldText style={{ flexGrow: 2, flex: 1 }}>Банк</BoldText>
                </View>
                {
                    monthRating.map((user, ind) => (ind < elementsShown) && (
                        <TouchableOpacity onPress={() => navigateToProfile(user.username)} style={[styles.ratingItem, user.username == currentUser && { backgroundColor: '#f2ccc4' }]}>
                            <ThinText style={{ flexGrow: 1, flex: 1 }}>{ind + 1}</ThinText>
                            <ThinText style={{ flexGrow: 5, flex: 1 }}>{user.username}</ThinText>
                            <ThinText style={{ flexGrow: 2, flex: 1 }}>{user.betCount}</ThinText>
                            <ThinText style={{ flexGrow: 2, flex: 1 }}>{user.roi + '%'}</ThinText>
                            <ThinText style={{ flexGrow: 2, flex: 1 }}>{user.profit + '€'}</ThinText>
                        </TouchableOpacity>
                    ))
                }
            </ContentLayout>
        </ScreenLayout>
    )
}