import teams from '../data/teams.json'

class Team {

    id
    seasons

    constructor(team_id) {
        let team = teams.find(element => element.id === team_id)
        Object.assign(this, team)
        /*if(cyclist)
            this.region = new Region(cyclist.region)*/
    }

    getTeam(year) {
        return this.seasons.find(season => season.year == year)
    }

    /*getFlagId(year) {
        if(this.region)
            return this.region.getFlagId()
        else return null
    }*/
    getFlagId() {
        return null
    }
}

export default Team