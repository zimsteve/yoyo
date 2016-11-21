const clone = require('clone')

module.exports = reducer

function reducer (state, action) {
  var newState = clone(state)
  switch (action.type) {
    case 'INIT':
      return newState
    case 'RECEIVE_BEERS':
      newState.beers = action.payload
      return newState
    case 'TOGGLE_LOADING':
      newState.isLoading = !newState.isLoading
      return newState
  }
  return newState
}
