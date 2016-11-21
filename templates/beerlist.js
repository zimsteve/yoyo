const yo = require('yo-yo')
const createSingleBeer = require('./singlebeer')
const getBeers = require('../api').getBeers

module.exports = displayBeers

function displayBeers (state, dispatch) {
  var beerlist = state.beers
  var isLoading = state.isLoading
  return yo`
    <div id='beerlist'>
    <button class='refresh' onclick=${() => getBeers(dispatch)}>Refresh</button>
    <br />
    <br />
      ${(isLoading) ? 'Loading ...' : ''}
      ${
        beerlist.map((beer) => createSingleBeer(beer, dispatch))
      }
    </div>
  `
}
