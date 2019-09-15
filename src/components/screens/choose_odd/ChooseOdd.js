import React from 'react'
import { View } from 'react-native'

import {
    ScreenLayout,
    Header,
    ContentLayout,
    OddPanel
} from '../../templates'

export const ChooseOdd = ({ loading, oddList, navigateToChooseMoney }) => {

    oddList = {
        "Победа в матче": {
            "": [
                {
                    "label": "Победа 1",
                    "ratio": 5.5,
                    "id": 1,
                    "category": 8
                },
                {
                    "label": "Победа 2",
                    "ratio": 1.166,
                    "id": 3,
                    "category": 2
                }
            ]
        },
        "Победа с учетом форы": {
            "13.5": [
                {
                    "label": "Ф1(+13.5)",
                    "ratio": 1.94,
                    "id": 236,
                    "category": 5
                },
                {
                    "label": "Ф2(-13.5)",
                    "ratio": 1.92,
                    "id": 583,
                    "category": 5
                }
            ],
            "14": [
                {
                    "label": "Ф1(+14)",
                    "ratio": 1.84,
                    "id": 237,
                    "category": 5
                },
                {
                    "label": "Ф2(-14)",
                    "ratio": 1.94,
                    "id": 582,
                    "category": 5
                }
            ]
        },
        "Тотал матча": {
            "53.5": [
                {
                    "label": "ТМ(53.5)",
                    "ratio": 1.93,
                    "id": 1517,
                    "category": 5
                },
                {
                    "label": "ТБ(53.5)",
                    "ratio": 1.85,
                    "id": 917,
                    "category": 5
                }
            ],
            "54": [
                {
                    "label": "ТМ(54)",
                    "ratio": 1.909,
                    "id": 1518,
                    "category": 5
                },
                {
                    "label": "ТБ(54)",
                    "ratio": 1.95,
                    "id": 918,
                    "category": 5
                }
            ]
        },
        "Индивидуальный тотал #TEAM1#": {
            "20": [
                {
                    "label": "ИТМ1(20)",
                    "ratio": 1.81,
                    "id": 2453,
                    "category": 5
                },
                {
                    "label": "ИТБ1(20)",
                    "ratio": 1.93,
                    "id": 2053,
                    "category": 5
                }
            ]
        },
        "Индивидуальный тотал #TEAM2#": {
            "34": [
                {
                    "label": "ИТМ2(34)",
                    "ratio": 1.83,
                    "id": 3281,
                    "category": 5
                },
                {
                    "label": "ИТБ2(34)",
                    "ratio": 1.909,
                    "id": 2881,
                    "category": 5
                }
            ]
        }
    }

    return (
        <ScreenLayout>
            <Header back />
            <ContentLayout loading={loading}>
                <View style={{ marginBottom: 20, marginTop: 20 }}>
                    {Object.keys(oddList).map(oddName =>
                        <OddPanel
                            oddName={oddName}
                            oddInfo={oddList[oddName]}
                            handleOddPress={navigateToChooseMoney}
                        />)}
                </View>
            </ContentLayout>
        </ScreenLayout>
    )
}