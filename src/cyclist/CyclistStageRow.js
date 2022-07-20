import React, { Component } from 'react'
import '../styling.css'

export default class CyclistStageRow extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {
        let raceId = this.props.raceId
        let year = this.props.year
        let name = this.props.stage.name
        let results = this.props.stage.results
        let positions = {}
        let tag = results ? results[0].tag : undefined
        results.forEach(result => positions[result.classification] = result.position)
        this.setState({ raceId: raceId, year: year, name: name, positions: positions, tag: tag })
    }

    render() {
        return (
            <div>
                {this.state.name && <div style={{ display: 'flex', height: 25 }}>
                    <div style={{ width: 40, paddingLeft: 10 }} className='table-item'>
                        {this.state.positions.main && this.state.positions.main}
                    </div>
                    <div className='table-item-link' style={{ display: 'flex', width: 180 }} onClick={() => (this.state.tag && this.props.history.push('/race/' + this.state.raceId + '/' + this.state.year + '/' + this.state.tag)) || (this.state.name === 'General Classification' && this.props.history.push('/race/' + this.state.raceId + '/' + this.state.year))}>
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
