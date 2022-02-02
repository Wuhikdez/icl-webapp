import teams from '../data/teams.json'
import '../styling.css'

class TeamList {

    teamList

    constructor(year) {
        if(year == 'All') {
            this.teamList = teams.map(team => ({id: team.id, season: team.seasons.sort((a, b) => b.year - a.year)[0]}))
        } else {
            this.teamList = teams.map(team => ({id: team.id, season: team.seasons.find(season => season.year == year)})).filter(team => team.season)
        }
    }
}

export default TeamList