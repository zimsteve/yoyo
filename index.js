const redux = require('redux')
const yo = require('yo-yo')
const reducer = require('./reducer')
const displayBeers = require('./templates/beerlist');

var main = document.querySelector('main')
var app = document.createElement('div')
main.appendChild(app)

var initialState = {
  beerlist: []
}

const store = redux.createStore(reducer, initialState)

store.subscribe(() => {
  var state = store.getState()
  var view = render(state, store.dispatch)
  yo.update(app, view)
})

store.dispatch({type: 'INIT'})

function render (state, dispatch) {
  return yo`
            <div class='app'>${displayBeers(state.beerlist, store.dispatch)}</div>
           `
}
