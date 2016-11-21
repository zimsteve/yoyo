const request = require('superagent')

function callAPI(dispatch) {
  request
  .get('https://rogue-beers.herokuapp.com/api/v1/beers')
  .end((err, res) => {
    if (err) return
    dispatch({type: 'RECEIVE_BEERS', payload: res.body.beers})
  })
}

module.exports = callAPI
