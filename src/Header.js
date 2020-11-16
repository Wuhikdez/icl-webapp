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
                    <div className="button-header"onClick={() => this.props.history.push('/calendar/2018')}>2018</div>
                    <div className="button-header"onClick={() => this.props.history.push('/calendar/2019')}>2019</div>
                </div>
            </div>
        )
    }
}
