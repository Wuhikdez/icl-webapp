import React, { Component } from 'react'
import '../styling.css'

export default class CyclistStageRow extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {
        let name = this.props.stage.name
        let results = this.props.stage.results
        let positions = {}
        results.forEach(result => positions[result.classification] = result.position)
        this.setState({ name: name, positions: positions })
    }

    render() {
        return (
            <div>
                {this.state.name && <div style={{ display: 'flex', height: 25 }}>
                    <div style={{ width: 40, paddingLeft: 10 }} className='table-item'>
                        {this.state.positions.main && this.state.positions.main}
                    </div>
                    <div className='table-item-link' style={{ display: 'flex', width: 180 }}>
                        <div style={{ marginLeft: 4 }}>{this.state.name}</div>
                    </div>
                    <div className='table-item' style={{ width: 240, display: 'flex' }}>
                        <div style={{width: 24, color: 'goldenrod'}}>
                            {this.state.positions['General Classification'] && this.state.positions['General Classification']}
                        </div>
                    </div>
                </div>}
            </div>
        )
    }
}
