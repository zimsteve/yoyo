const clone = require('clone')

module.exports = reducer

function reducer (state, action) {
  var newState = clone(state)
  switch (action.type) {
    case 'INIT':
      return newState
  }
  return newState
}
