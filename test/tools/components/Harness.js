import React, { Component } from 'react'
import PropTypes from 'prop-types'

import GroupTable from '../../../src/groupTable'

export default class Harness extends Component {
  renderTemplate () {
    return (
      <GroupTable />
    )
  }

  render () {
    return (
      <div>
        {this.renderTemplate()}
      </div>
    )
  }
}

Harness.propTypes = {
  template: PropTypes.object
}
