import React, { Component } from 'react'
import PropTypes from 'prop-types'

import GroupTable from '../../../src/groupTable'

export default class Harness extends Component {
  render () {
    return (
      <GroupTable {...this.props} />
    )
  }
}

Harness.propTypes = {
  template: PropTypes.object
}
