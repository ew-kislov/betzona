export function transformTournamentListReponse(tournamentList) {
    return tournamentList.map(tournament => ({
        id: tournament.id,
        name: tournament.name
    }))
}