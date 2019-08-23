import { createSelector } from 'reselect'

import { DAY_TYPES, SPORT_TYPES } from '../../constants'

const getPrognosisList = state => state.prognosis.prognosisList

function filterPrognosisListBySport(prognosisList, sportName) {
    try {
        currentList = { ...prognosisList }
        for (selector in currentList) {
            let list = currentList[selector]
            list = list.filter(prognosis => prognosis.sport == sportName)

            currentList[selector] = list
        }
        return currentList
    } catch (error) { return prognosisList }
}

function filterPopularPrognosis(prognosisList) {
    try {
        allPrognosisList = [...prognosisList[DAY_TYPES.ALL]]
        return allPrognosisList
    } catch (error) { return prognosisList }
}

export const popularPrognosisListSelector = createSelector(
    [getPrognosisList],
    prognosisList => filterPopularPrognosis(prognosisList)
)

export const footballPrognosisListSelector = createSelector(
    [getPrognosisList],
    prognosisList => filterPrognosisListBySport(prognosisList, SPORT_TYPES.FOOTBALL)
)

export const tennisPrognosisListSelector = createSelector(
    [getPrognosisList],
    prognosisList => filterPrognosisListBySport(prognosisList, SPORT_TYPES.TENNIS)
)

export const hockeyPrognosisListSelector = createSelector(
    [getPrognosisList],
    prognosisList => filterPrognosisListBySport(prognosisList, SPORT_TYPES.HOCKEY)
)