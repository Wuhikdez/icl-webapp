import React, { Component } from 'react'
import './styling.css'

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div style={{textAlign: "right", marginRight: 120, marginTop: 20}}>
                    <div className="button-header"onClick={() => this.props.history.push('/teams/2020')}>Teams</div>
                    <div className="button-header"onClick={() => this.props.history.push('/riders/2020')}>Riders</div>
                    <div className="button-header"onClick={() => this.props.history.push('/races/2020')}>Races</div>
                    <div className="button-header"onClick={() => this.props.history.push('/calendar/2020')}>Calendar</div>
                </div>
            </div>
        )
    }
}
