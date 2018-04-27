import React, { Component } from 'react'
import { connect } from 'react-redux'

import Harness from '../components/Harness.js'

import { increment } from '../redux/template/actions'
const breakStyle = { height: '50px', backgroundColor: '#c0c0c0' }

export class HarnessPage extends Component {
  render () {
    return (
      <div>
        <Harness {...this.props} />
        <div style={breakStyle} />
        <Harness {...this.props} />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    template: state.template
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onButtonClick: () => dispatch(increment())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HarnessPage)
