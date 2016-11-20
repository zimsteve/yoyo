const yo = require('yo-yo')

module.exports = Fact

function Fact (fact, dispatch) {
  const {id, description, votes, author} = fact

  return yo`
    <div>
      <h3>${description}</h3>
      <p> - ${author}</p>
      <p>votes: ${votes}</p>
    </div>
  `
}
