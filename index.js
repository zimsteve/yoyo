const redux = require('redux')
const yo = require('yo-yo')
const reducer = require('./reducer')
const displayBeers = require('./templates/beerlist')
const request = require('superagent')

let main = document.querySelector('main')
let app = document.createElement('div')
main.appendChild(app)

let initialState = {
  beers: []
}

const store = redux.createStore(reducer, initialState)
let state = store.getState()

store.subscribe(() => {
  state = store.getState()
  var view = render(state, store.dispatch)
  yo.update(app, view)
})

store.dispatch({type: 'INIT'})

function render (state, dispatch) {
  console.log("state in render FN", state);
  return yo`
            <div class='app'>${displayBeers(state.beers, store.dispatch)}</div>
           `
}

request
  .get('https://rogue-beers.herokuapp.com/api/v1/beers')
  .end((err, res) => {
    console.log({err})
    console.log(res.body)
    if (err) return
    store.dispatch({type: 'RECEIVE_BEERS', payload: res.body.beers})
  })
