import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import HarnessPage from './containers/HarnessPage'

export default class Root extends React.Component {
  render () {
    return (
      <Provider store={this.props.store}>
        <HarnessPage />
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}
