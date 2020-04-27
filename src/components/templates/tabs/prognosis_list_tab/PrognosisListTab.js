import React from 'react'
import { View, Text } from 'react-native'

import { ContentLayout } from '../../layouts/ContentLayout'
import { PrognosisPanel } from '../../panels'
import { SubtitleText, SliderPanel, SliderButton } from '../../../primitives'

import { DAY_TYPES } from '../../../../constants'

export const PrognosisListTab = ({
    loading,
    refreshing,
    prognosisList,
    refreshHandler,
    selector,
    changeSelector,
    prognosisPressHandler,
    shown,
    showMore
}) => {
    currentPrognosisLength = prognosisList[selector].length
    allPrognosisLength = prognosisList[DAY_TYPES.ALL].length
    todayPrognosisLength = prognosisList[DAY_TYPES.TODAY].length
    tomorrowPrognosisLength = prognosisList[DAY_TYPES.TOMORROW].length

    isBlank = (allPrognosisLength == 0 && todayPrognosisLength == 0 && tomorrowPrognosisLength == 0)

    return (
        <ContentLayout scrollEndHanler={showMore} loading={loading} refreshing={refreshing} refreshHandler={refreshHandler} withoutPadding={true}>

            {
                isBlank ?
                    <SubtitleText style={{ margin: 15 }}>Прогнозов нет</SubtitleText>
                    :
                    <SliderPanel style={{ margin: 15 }}>
                        {allPrognosisLength > 0 && <SliderButton isActive={selector == DAY_TYPES.ALL} onPress={() => changeSelector(DAY_TYPES.ALL)}>Все</SliderButton>}
                        {allPrognosisLength > 0 && <SliderButton isActive={selector == DAY_TYPES.TODAY} onPress={() => changeSelector(DAY_TYPES.TODAY)}>Сегодня</SliderButton>}
                        {allPrognosisLength > 0 && <SliderButton isActive={selector == DAY_TYPES.TOMORROW} isLast={true} onPress={() => changeSelector(DAY_TYPES.TOMORROW)}>Завтра</SliderButton>}
                    </SliderPanel>
            }

            {
                currentPrognosisLength > 0 && (
                    <View style={{ alignItems: 'center' }}>
                        {prognosisList[selector].map((prognosis, ind) => (ind < shown) && (
                            <PrognosisPanel
                                key={prognosis.id}
                                home={prognosis.home}
                                away={prognosis.away}
                                dateString={prognosis.dateString}
                                homeLogo={prognosis.homeLogo}
                                awayLogo={prognosis.awayLogo}
                                sport={prognosis.sport}
                                odd={prognosis.odd}
                                rate={prognosis.rate}
                                onPress={() => prognosisPressHandler(prognosis.path)}
                                popular={false}
                            />
                        ))}
                    </View>
                )
            }
        </ContentLayout>
    )
}