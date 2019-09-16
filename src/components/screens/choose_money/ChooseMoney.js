import React from 'react'
import { View, TextInput } from 'react-native'

import {
    ScreenLayout,
    Header,
    ContentLayout,
    ChosenPrognosisPanel,
    SumPanel,
} from '../../templates'
import { DescriptionText, GrayPanel, WidePrimaryButton } from '../../primitives'
import { styles } from './styles'

export const ChooseMoney = ({
    loading,
    moneyList,
    odd,
    match,
    activeSum,
    handleSumChange,
    handleSumInput,
    addPrognosis }) => {
    return (
        <ScreenLayout>
            <Header customTitle back title={match.name} />
            <ContentLayout loading={loading} style={{ marginBottom: 20, marginTop: 20 }}>
                <ChosenPrognosisPanel name={odd.label} rate={odd.ratio} />

                <DescriptionText style={{ marginTop: 10 }}>Укажите сумму ставки (€):</DescriptionText>

                <GrayPanel style={{ marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', flex: 1, flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        {moneyList.map(money =>
                            <SumPanel
                                sum={money}
                                key={money}
                                activeSum={activeSum}
                                handleSumChange={() => handleSumChange(money)}
                            />)}
                    </View>
                    <View style={[styles.wrappedContainer, { marginTop: 10 }]}>
                        <TextInput
                            style={styles.summInput}
                            onChangeText={handleSumInput}
                            defaultValue={activeSum}
                            placeholder='Сумма ставки'
                        />
                    </View>
                </GrayPanel>

                <View style={{ width: 200, alignSelf: 'center' }}>
                    <WidePrimaryButton style={{ marginTop: 10 }} onPress={addPrognosis}>Добавить прогноз</WidePrimaryButton>
                </View>
            </ContentLayout>
        </ScreenLayout>
    )
}