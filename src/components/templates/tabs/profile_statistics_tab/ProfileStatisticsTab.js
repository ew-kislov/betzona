import React from 'react'
import { View, Image, Dimensions } from 'react-native'
// import LineChart from '../../../primitives/charts/line-chart'

import { ScreenLayout, ContentLayout, ProfileStatPanel } from '../../../templates'
import { SubtitleText, GrayText } from '../../../primitives'

export const ProfileStatisticsTab = ({ loading, id, username, photoUrl, profileStats, graph, shown, showMore }) => {
    chartParams = {
        labels: graph.labels,
        datasets: [{ data: graph.data, color: () => '#54b1e0', strokeWidth: 1 }]
    }
    return (
        <ScreenLayout>
            <ContentLayout loading={loading} withoutPadding={true} scrollEndHanler={showMore}>
                {/* 
                {
                    graph && graph.data && graph.data.length > 0 && (
                        <View>
                            <SubtitleText style={{ marginTop: 25, marginBottom: 25, textAlign: 'center' }}>График прибыльности за последние дни</SubtitleText>
                            <View style={{ flex: 1, width: '100%', alignItems: 'center' }}>
                                <LineChart
                                    data={chartParams}
                                    width={Dimensions.get('window').width * (graph.data.length + 1) / graph.data.length}
                                    height={220}
                                    chartConfig={{
                                        decimalPlaces: 2,
                                        color: (opacity = 1) => `rgba(54, 146, 192, ${opacity})`,
                                    }}
                                    bezier
                                />
                            </View>
                        </View>
                    )
                } */}

                {
                    Object.entries(profileStats).map(([category, statsByCategory]) => {
                        return (
                            <View>
                                <SubtitleText style={{ marginTop: 20, marginLeft: 15 }}>{category}</SubtitleText>
                                {
                                    statsByCategory.map((statElement, ind) => (ind < shown) && (
                                        <View style={{ marginLeft: 15 }}>
                                            {statElement.categoryName && <GrayText style={{ marginTop: 10 }}>{statElement.categoryName}</GrayText>}
                                            <ProfileStatPanel style={{ marginTop: 10, marginBottom: 10 }} statElement={statElement} />
                                        </View>
                                    ))
                                }
                            </View>
                        )
                    })
                }
            </ContentLayout>
        </ScreenLayout>
    )
}