import React from 'react'
import { View } from 'react-native'

import { TitleText } from '../../primitives'
import { CommentPanel } from './CommentPanel'

const mockComments = [
    {
        id: 1,
        text: 'Португальцы такие лисы. Они постоянно теребят не тот платочек. В итоге все закончиться разгромом в Португалии. А в России клубы могут сыграть даже результативную ничью - 1:1.',
        userName: 'oldman',
        date: '5 августа 13:41'
    },
    {
        id: 2,
        text: 'Португальцы такие лисы. Они постоянно теребят не тот платочек. В итоге все закончиться разгромом в Португалии. А в России клубы могут сыграть даже результативную ничью - 1:1.',
        userName: 'oldman',
        date: '5 августа 13:41'
    },
    {
        id: 3,
        text: 'Португальцы такие лисы. Они постоянно теребят не тот платочек. В итоге все закончиться разгромом в Португалии. А в России клубы могут сыграть даже результативную ничью - 1:1.',
        userName: 'oldman',
        date: '5 августа 13:41'
    }
]

export const CommentList = ({ comments, style }) => {
    return (
        <View style={style}>
            <TitleText>Комментарии:</TitleText>

            { mockComments.map(comment => <CommentPanel key={comment.id} comment={comment} style={{ marginTop: 10 }} />) }
        </View>
    )
}