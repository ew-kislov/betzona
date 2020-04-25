import React from 'react'
import { TouchableOpacity, Dimensions, View } from 'react-native'

import { RoundWideShadow } from '../shadows/RoundWideShadow'

import { styles } from './styles'

export const ShadowPanel = ({ children, height, width, onPress, innerStyle, outerStyle, border, y, x, opacity }) => {
    return (
        <RoundWideShadow style={outerStyle} width={width || (Dimensions.get('screen').width - 30)} border={border} height={height} opacity={opacity} y={y} x={x}>
            <TouchableOpacity onPress={onPress} style={[{ height, width: width || (Dimensions.get('screen').width - 30) }, styles.shadowPanel, innerStyle]}>
                {/* <View style={[styles.shadowPanel, { height: height }, style]}> */}
                {children}
                {/* </View> */}
            </TouchableOpacity>
        </RoundWideShadow>
    )
}