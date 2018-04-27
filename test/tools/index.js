import React from 'react'
import { render } from 'react-dom'
import Root from './Root'
import configStore from './redux/store'

require('../../src/styles/core.scss')

const store = configStore()

const renderApp = root => render(root, document.getElementById('root'))

renderApp(<Root store={store} />)
