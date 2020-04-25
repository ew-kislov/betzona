import React from 'react'
import { TextInput } from 'react-native'

import { styles } from './styles'

export const PrimaryInput = ({ placeholder, style, onChangeText, secureTextEntry, defaultValue }) => {
    return (
        <TextInput
            onChangeText={onChangeText}
            placeholder={placeholder}
            style={[styles.primaryInput, style]}
            secureTextEntry={secureTextEntry}
            defaultValue={defaultValue}
        />
    )
}