import React from 'react'
import { ActivityIndicator } from 'react-native'
import BasicLoadingView from 'react-native-loading-view'

export const LoadingView = ({ loading, children }) => {
    return (
        <BasicLoadingView loading={loading} indicator={<ActivityIndicator size="large" color="#45ade1" />}>
            {children}
        </BasicLoadingView>
    )
}