import React from 'react'

import { Panel, DescriptionText, RowContainer, UserIcon, CalendarIcon, PrimaryText } from '../../primitives'

export const CommentPanel = ({ comment, style }) => {
    return (
        <Panel style={style}>
            <DescriptionText>{comment.text}</DescriptionText>

            <RowContainer style={{ marginTop: 10 }}>
                <UserIcon />
                <PrimaryText style={{ marginLeft: 5 }}>{comment.userName}</PrimaryText>
            </RowContainer>

            <RowContainer style={{ marginTop: 7 }}>
                <CalendarIcon />
                <PrimaryText style={{ marginLeft: 7 }}>{comment.date}</PrimaryText>
            </RowContainer>
        </Panel>
    )
}