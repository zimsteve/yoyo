const redux = require('redux')
const morphdom = require('morphdom')
const yo = require('yo-yo')
const reducer = require('./reducer')
const displayFacts = require('./templates/facts');

var main = document.querySelector('main')
var app = document.createElement('div')
main.appendChild(app)

var initialState = {
  josephfacts: [
    {id: 1, description: 'joseph is a robot', votes: 0, author: 'mick66'},
    {id: 2, description: 'joseph has 11 toes', votes: 0, author: 'jim_likes69'},
    {id: 3, description: 'joseph can play the flute', votes: 0, author: 'jacko_wacko'},
    {id: 4, description: 'joseph was born on the moon', votes: 0, author: 'sarah_bukka'},
    {id: 5, description: 'joseph once killed a man in Reno', votes: 0, author: 'jim_like70'},
    {id: 6, description: 'joseph was conceived by 2 trees, and somehow came out of a fish', votes: 0, author: 'andy_handy_dandy'}
  ]
}

const store = redux.createStore(reducer, initialState)

store.subscribe(() => {
  var state = store.getState()
  var view = render(state, store.dispatch)
  morphdom(app, view)
})

store.dispatch({type: 'INIT'})

function render (state, dispatch) {
  return yo`
            <div class='app'>${displayFacts(state.josephfacts, store.dispatch)}</div>
           `
}
