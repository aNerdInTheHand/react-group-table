import initialState from './initialState'
import { reducer as increment } from './increment'

const reducers = [
  increment
]

export default (previousState = initialState, action) =>
  reducers.reduce((state, reducer) => reducer(state, action), previousState)
