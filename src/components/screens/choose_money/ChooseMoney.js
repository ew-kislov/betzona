import React from 'react'
import { View } from 'react-native'

import {
    ScreenLayout,
    Header,
    ContentLayout,
    ChosenPrognosisPanel,
    SumPanel,
} from '../../templates'
import { TitleText, SubtitleText, PrimaryInput, OutlineButton } from '../../primitives'
import { styles } from './styles'

export const ChooseMoney = ({
    loading,
    moneyList,
    odd,
    oddName,
    match,
    activeSum,
    handleSumChange,
    handleSumInput,
    addPrognosis }) => {
    return (
        <ScreenLayout>
            <Header customTitle back title={match.name} />
            <ContentLayout loading={loading} style={{ marginBottom: 20, marginTop: 20 }}>
                <TitleText style={{ textAlign: 'center' }}>{oddName}</TitleText>
                <ChosenPrognosisPanel style={{ marginTop: 10 }} name={odd.label} rate={odd.ratio} />

                <SubtitleText style={{ marginTop: 30, textAlign: 'center' }}>Укажите сумму ставки</SubtitleText>

                <View style={{ marginTop: 20, marginHorizontal: 30, flexDirection: 'row', flex: 1, flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    {moneyList.map(money =>
                        <SumPanel
                            sum={money}
                            key={money}
                            activeSum={activeSum}
                            handleSumChange={() => handleSumChange(money)}
                        />)}
                </View>

                <PrimaryInput
                    style={[styles.summInput, { marginTop: 20, flex: 1, marginHorizontal: 20 }]}
                    onChangeText={handleSumInput}
                    defaultValue={activeSum}
                    placeholder='Сумма ставки'
                />

                <OutlineButton style={{ marginTop: 20, flex: 1, marginHorizontal: 20 }} onPress={addPrognosis}>Добавить прогноз</OutlineButton>
            </ContentLayout>
        </ScreenLayout>
    )
}