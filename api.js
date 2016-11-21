const request = require('superagent')

function callAPI(dispatch) {
  dispatch({type: 'TOGGLE_LOADING'})
  request
  .get('https://rogue-beers.herokuapp.com/api/v1/beers')
  .end((err, res) => {
    if (err) return
    dispatch({type: 'RECEIVE_BEERS', payload: res.body.beers})
    dispatch({type: 'TOGGLE_LOADING'})
  })
}

module.exports = callAPI
