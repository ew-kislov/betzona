import React from 'react'
import { View } from 'react-native'

import { PrimaryText, RowContainer, CupIcon, ClockIcon, WidePrimaryButton, DividerPanel } from '../../primitives'

export const DetailedBetPanel = ({ description, date, time, onPress, style }) => {
    return (
        <DividerPanel style={[style, { paddingTop: 30, paddingBottom: 30 }]} light>
            <RowContainer>
                <CupIcon />
                <PrimaryText style={{ marginLeft: 10 }}>
                    {description}
                </PrimaryText>
            </RowContainer>

            <RowContainer style={{ marginTop: 10 }}>
                <ClockIcon />
                <PrimaryText style={{ marginLeft: 10 }}>
                    { date + ' ' + time}
                </PrimaryText>
            </RowContainer>

            {/* <WidePrimaryButton onPress={onPress} style={{ marginTop: 15 }}>Сделать ставку</WidePrimaryButton> */}
        </DividerPanel>
    )
}