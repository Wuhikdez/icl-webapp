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

    getTeam(team_id, year) {
        let team = new Team(team_id)
        let cyclists = team.getCyclists(year)
        let team_season = team.getTeam(year)
        this.setState({ cyclists: cyclists, team: team_season })
    }

    render() {
        return (
            <div style={{ marginLeft: 180 }}>
                {this.state.team && <div style={{ display: 'flex' }}>
                    {/*<div style={{ marginTop: 14, marginRight: 8 }}>
                        <Flag tag={this.state.race_data.country.getFlagId()} size={40} />
                    </div>*/}
                    <h2>{this.state.team.name}</h2>
                    <h2 style={{ marginLeft: 16, color: 'steelblue' }}>{this.state.year}</h2>
                </div>}
                <div style={{ width: 320 }}>
                    {this.state.cyclists && this.state.cyclists.map(cyclist => <div id={cyclist.id} className="table-item-link" style={{ width: 200 }} style={{ display: 'flex' }}
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
