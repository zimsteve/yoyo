var test = require('tape')
var freeze = require('deep-freeze')

var reducer = require('../reducer')

test('base test', (t) => {
  t.ok(true)
  t.end()
})

test('Test that reducer can display the facts', (t) => {
  // arrange
  const state = {
    conspiracies: [
      {id: 1, description: 'joseph is a robot', votes: 0, author: 'mick'},
      {id: 2, description: 'joseph has 11 toes', votes: 0, author: 'mick'},
      {id: 3, description: 'joseph can play the flute', votes: 0, author: 'mick'}
    ]
  }

  const expectedState = {
    conspiracies: [
      {id: 1, description: 'joseph is a robot', votes: 0, author: 'mick'},
      {id: 2, description: 'joseph has 11 toes', votes: 0, author: 'mick'},
      {id: 3, description: 'joseph can play the flute', votes: 0, author: 'mick'}
    ]
  }
  freeze(state)
  // act
  const actual = reducer(state, {type: 'INIT'})
  // assert
  t.deepEquals(actual, expectedState, 'the reducer displays the facts')
  t.end()
})
