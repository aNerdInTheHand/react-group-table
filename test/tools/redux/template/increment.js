import { typeIncrement as type } from '../actionTypes'

const action = () => ({ type })

const increment = state => {
  return Object.assign(
    {},
    state,
    {count: state.count + 1}
  )
}

const reducer = (state, action) => {
  return action.type === type
    ? increment(state)
    : state
}

module.exports = {
  action,
  reducer
}
