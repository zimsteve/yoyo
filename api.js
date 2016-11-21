const request = require('superagent')

function getBeers (dispatch) {
  dispatch({type: 'TOGGLE_LOADING'})
  request
  .get('https://rogue-beers.herokuapp.com/api/v1/beers')
  .end((err, res) => {
    if (err) return
    dispatch({type: 'RECEIVE_BEERS', payload: res.body.beers})
    dispatch({type: 'TOGGLE_LOADING'})
  })
}

function getStyles (dispatch, searchTerm) {
  searchTerm = searchTerm.split(" ").pop()
  if (searchTerm === 'Pilsner') {
    searchTerm = 'Pilsener'
  }
  var url = 'https://rogue-beers.herokuapp.com/api/v1/styles?q=' + searchTerm
  request
  .get(url)
  .end((err, res) => {
    if (err) return
    if (res.body.styles.length === 0) {
      dispatch({type: 'TOGGLE_STYLE'})
    } else {
      dispatch({type: 'TOGGLE_STYLE', payload: res.body.styles[0]})
    }
  })
}

module.exports = {
  getBeers,
  getStyles
}
