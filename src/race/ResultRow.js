import React, { Component } from 'react'
import '../styling.css'
import Teams from '../data/teams.json'

import Cyclist from '../assets/Cyclist'

import Flag from '../icons/Flag'

export default class ResultRow extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    componentDidMount() {
        this.setup()
    }

    setup = () => {
        let row = this.props.row
        let cyclist = new Cyclist(row.cyc_id)
        if(!cyclist.lastname)
            console.log(row)
        let pos = row.pos
        let value = row.value
        let team = Teams.find(element => element.id === row.team_id)
        if (team)
            this.setState({ teamName: team['seasons'].find(element => element.year == this.props.year)['name'] })
        this.setState({ pos: pos, value: value, cyclist: cyclist, team: team })
    }

    componentDidUpdate(prevProps) {
        if(prevProps.row != this.props.row)
            this.setup()
    }

    render() {
        if (this.state.cyclist && !this.state.cyclist.lastname)
            return null
        return (
            <div style={{ display: 'flex' }}>
                <div className="table-item" style={{ width: 32 }}>{this.state.pos}</div>
                <div className="table-item-link" style={{ width: 200 }}>
                    {this.state.cyclist && <div style={{ display: 'flex' }} 
                        onClick={() => this.props.history.push('/cyclist/' + this.state.cyclist.id + '/2018')}>
                        <div style={{marginTop: 0}}>
                            <Flag tag={this.state.cyclist.getFlagId()} size={18} />
                        </div>
                        <div style={{ marginLeft: 4 }}>{this.state.cyclist.fullname()}</div>
                    </div>}
                </div>
                <div className="table-item-link" style={{ width: 280 }} >{this.state.teamName && <div>
                    {this.state.teamName}
                </div>}</div>
                <div className="table-item" style={{ width: 72 }}>{this.state.value}</div>
            </div>
        )
    }
}
