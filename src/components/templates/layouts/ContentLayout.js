import React from 'react'
import { View } from 'react-native'

import { ShiftScrollView } from './ShiftScrollView'
import { LoadingView } from './LoadingView'
import { styles } from './styles'

/**
 * ContentLayout - layout for content in screen apart from header
 * @prop loading: Boolean - indicator for screens which have data fetch
 */
export const ContentLayout = ({ loading, refreshing, refreshHandler, children, style }) => {
    return (
        <LoadingView loading={loading || false}>
            <View style={styles.flex1}>
                <ShiftScrollView
                    refreshing={refreshing || false}
                    refreshHandler={refreshHandler}
                    style={[styles.centerContainer, style]}>
                    {children}
                </ShiftScrollView>
            </View>
        </LoadingView>
    )
}