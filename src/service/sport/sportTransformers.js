export function transformSportListResponse(sports) {
    return sports.map(sport => ({
        id: sport.id,
        name: sport.name,
        imgUrl: sport.img
    }))
}