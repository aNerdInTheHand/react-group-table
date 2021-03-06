import React, { Component } from 'react'
import { connect } from 'react-redux'

import Harness from '../components/Harness.js'
const FALSE = false

const breakStyle = { height: '50px', backgroundColor: '#c0c0c0' }

export class HarnessPage extends Component {
  render () {
    return (
      <div>
        <Harness {...this.props} groupName='Group H' />
        <div style={breakStyle} />
        <Harness
          {...this.props}
          showGoalsConceded={FALSE}
          showGoalsScored={FALSE}
          showPositions={FALSE} />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    teams: state.group.teams
  }
}

export default connect(mapStateToProps, null)(HarnessPage)
