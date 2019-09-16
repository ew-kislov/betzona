import React from 'react'

import { ContentLayout } from '../../layouts/ContentLayout'
import { PrognosisPanel } from '../../panels'
import { SubtitleText, PrimaryButton, RowContainer, Panel } from '../../../primitives'
import { styles } from '../styles'

import { SPORT_TYPES, DAY_TYPES } from '../../../../constants'

export const PrognosisListTab = ({
    loading,
    refreshing,
    prognosisList,
    refreshHandler,
    nearestPrognosisList,
    selector,
    changeSelector,
    prognosisPressHandler
}) => {

    currentPrognosisLength = prognosisList[selector].length
    allPrognosisLength = prognosisList[DAY_TYPES.ALL].length
    todayPrognosisLength = prognosisList[DAY_TYPES.TODAY].length
    tomorrowPrognosisLength = prognosisList[DAY_TYPES.TOMORROW].length

    isBlank = (allPrognosisLength == 0 && todayPrognosisLength == 0 && tomorrowPrognosisLength == 0)

    return (
        <ContentLayout loading={loading} refreshing={refreshing} refreshHandler={refreshHandler}>

            {isBlank && <SubtitleText style={{ marginTop: 10 }}>Прогнозов нет</SubtitleText>}
            <RowContainer style={{ marginTop: 10 }}>
                {allPrognosisLength > 0 && <PrimaryButton style={{ marginRight: 10 }} isActive={selector == DAY_TYPES.ALL} onPress={() => changeSelector(DAY_TYPES.ALL)}>Все</PrimaryButton>}
                {todayPrognosisLength > 0 && <PrimaryButton style={{ marginRight: 10 }} isActive={selector == DAY_TYPES.TODAY} onPress={() => changeSelector(DAY_TYPES.TODAY)}>Сегодня</PrimaryButton>}
                {tomorrowPrognosisLength > 0 && <PrimaryButton isActive={selector == DAY_TYPES.TOMORROW} onPress={() => changeSelector(DAY_TYPES.TOMORROW)}>Завтра</PrimaryButton>}
            </RowContainer>

            {
                currentPrognosisLength > 0 && (
                    <Panel style={{ marginTop: 20, marginBottom: 10 }}>
                        {prognosisList[selector].map((prognosis, ind) => (
                            <PrognosisPanel
                                key={prognosis.id}
                                title={prognosis.title}
                                dateString={prognosis.dateString}
                                sport={prognosis.sport}
                                odd={prognosis.odd}
                                rate={prognosis.rate}
                                style={currentPrognosisLength !== ind + 1 ? styles.prognosisPanel : { paddingBottom: 0, marginBottom: 5 }}
                                onPress={() => prognosisPressHandler(prognosis.path)}
                                popular={false}
                            />
                        ))}
                    </Panel>
                )
            }
        </ContentLayout>
    )
}