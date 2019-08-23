import React from 'react'

import { TitleText, WidePrimaryButton, DividerPanel, RowContainer, PrimaryTitleText } from '../../primitives'

export const MakeBetPanel = ({ slog, rate, onPress, style }) => {
    return (
        <DividerPanel style={style}>
            <RowContainer style={{ justifyContent: 'center' }}>
                <TitleText>{slog}</TitleText>
                <PrimaryTitleText style={{ marginLeft: 30 }}>{rate}</PrimaryTitleText>
            </RowContainer>
            <WidePrimaryButton onPress={onPress} style={{ marginTop: 15 }}>Сделать ставку</WidePrimaryButton>
        </DividerPanel>
    )
}