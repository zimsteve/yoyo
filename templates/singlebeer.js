const yo = require('yo-yo')
const getStyles = require('../api').getStyles

module.exports = createSingleBeer

function createSingleBeer (singlebeer, dispatch) {
  const {name, brewery, country, style, abv} = singlebeer

  return yo`
    <div class='singlebeer'>
      <h2>${name}</h2>
      <p>Brewery: ${brewery}</p>
      <p>Country: ${country}</p>
      <p class='style' onclick=${() => getStyles(dispatch, style)}>Style: ${style}</p>
      <p>ABV: ${abv}</p>
    </div>
  `
}

//     <button class='refresh' onclick=${() => getBeers(dispatch)}>Refresh</button>
