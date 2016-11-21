const redux = require('redux')
const yo = require('yo-yo')
const reducer = require('./reducer')
const displayBeers = require('./templates/beerlist')

let main = document.querySelector('main')
let app = document.createElement('div')
main.appendChild(app)

let initialState = {
  beers: [],
  isLoading: false
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
  return yo`
            <div class='app'>${displayBeers(state, store.dispatch)}</div>
           `
}
