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
  }
  return newState
}
