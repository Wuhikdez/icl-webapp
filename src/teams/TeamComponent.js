import React, { Component } from 'react'
import Team from '../assets/Team'
import Flag from '../icons/Flag'

export default class TeamComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {
        const { team_id, year } = this.props.match.params
        this.setState({ year: year, team_id: team_id })
        this.getTeam(team_id, year)
    }

    componentDidUpdate() {
        const { year } = this.props.match.params
        if (this.state.year != year) {
            const { team_id, year } = this.props.match.params
            this.setState({ year: year, team_id: team_id })
            this.getTeam(team_id, year)
        }
    }

    getTeam(team_id, year) {
        let team = new Team(team_id)
        let cyclists = team.getCyclists(year)
        let team_season = team.getTeam(year)
        this.setState({ cyclists: cyclists, teamSeason: team_season, team: team })
    }

    render() {
        return (
            <div style={{ marginLeft: 180 }}>
                {this.state.teamSeason && <div style={{ display: 'flex' }}>
                    <h2>{this.state.teamSeason.name}</h2>
                    {this.state.team.getSeasons().map(year =>
                        this.state.year == year
                        ? <h2 style={{ marginLeft: 16, color: 'steelblue' }} key={year}>{this.state.year}</h2>
                        : <h2 className="select-year" style={{ marginLeft: 16 }} key={year} onClick={() => this.props.history.push('/team/' + this.state.team.id + '/' + year)}>{year}</h2>)}
                </div>}
                <div style={{ width: 320 }}>
                    {this.state.cyclists && this.state.cyclists.map(cyclist => <div id={cyclist.id} key={cyclist.id} className="table-item-link" style={{ width: 200, display: 'flex' }}
                        onClick={() => this.props.history.push('/cyclist/' + cyclist.id + '/' + this.state.year)}>
                        <div style={{ marginTop: 0 }}>
                            <Flag tag={cyclist.getFlagId()} size={18} />
                        </div>
                        <div style={{ marginLeft: 4 }}>{cyclist.fullname()}</div>
                    </div>)}
                </div>
            </div>
        )
    }
}
