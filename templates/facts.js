const yo = require('yo-yo')
const Fact = require('./fact')

module.exports = displayFacts

function displayFacts (facts, dispatch) {
  return yo`
    <div id='facts'>
      Facts:
      ${
        facts.map((fact) => Fact(fact.dispatch))
      }
    </div>
  `
}
