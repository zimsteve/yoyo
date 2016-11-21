const yo = require('yo-yo')
const createSingleBeer = require('./singlebeer')
const callAPI = require('../api')

module.exports = displayBeers

function displayBeers (beerlist, dispatch) {
  return yo`
    <div id='beerlist'>
    <button class='refresh' onclick=${() => callAPI(dispatch)}>Refresh</button>
    <br />
      Beers:
      ${
        beerlist.map((beer) => createSingleBeer(beer, dispatch))
      }
    </div>
  `
}
