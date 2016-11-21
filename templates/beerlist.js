const yo = require('yo-yo')
const createSingleBeer = require('./singlebeer')

module.exports = displayBeers

function displayBeers (beerlist, dispatch) {
  console.log(beerlist);
  return yo`
    <div id='beerlist'>
      Beers:
      ${
        beerlist.map((beer) => createSingleBeer(beer, dispatch))
      }
    </div>
  `
}
