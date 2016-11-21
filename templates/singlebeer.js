const yo = require('yo-yo')

module.exports = createSingleBeer

function createSingleBeer (singlebeer, dispatch) {
  const {name, brewery, country, style, abv} = singlebeer

  return yo`
    <div class='singlebeer'>
      <h2>${name}</h2>
      <p>Brewery: ${brewery}</p>
      <p>Country: ${country}</p>
      <p>Style: ${style}</p>
      <p>ABV: ${abv}</p>
    </div>
  `
}
