const yo = require('yo-yo')
const createSingleBeer = require('./singlebeer')
const callAPI = require('../api')

module.exports = displayBeers

function displayBeers (state, dispatch) {
  var beerlist = state.beers
  var isLoading = state.isLoading
  console.log(isLoading)
  return yo`
    <div id='beerlist'>
    <button class='refresh' onclick=${() => callAPI(dispatch)}>Refresh</button>
    <br />
    <br />
      ${(isLoading) ? 'Loading ...' : ''}
      ${
        beerlist.map((beer) => createSingleBeer(beer, dispatch))
      }
    </div>
  `
}
