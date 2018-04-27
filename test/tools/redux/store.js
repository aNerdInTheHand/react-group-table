import { createStore, compose } from 'redux'

import rootReducer from './rootReducer'

const configStore = initialState => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(window.__REDUX_DEVTOOLS_EXTENSION__())
  )

  return store
}

export default configStore
