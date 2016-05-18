var test = require('tape')
var game = require('../game')

test('test setup is working', function (t) {
  t.equal(1, 1)
  t.end()
})

test('scores a gutterball frame', function (t) {
  var frame = [0, 0]
  var score = game.scoreFrame(frame)
  t.equals(score, 0)
  t.end()
})

test('scores an open frame', function (t) {
  var frame = [2, 6]
  var score = game.scoreFrame(frame)
  t.equals(score, 8, 'scores an open frame')
  t.end()
})

test('scores a spare frame', function (t) {
  var frame = [5, 5]
  var nextFrame = [3, 5]
  var score = game.scoreFrame(frame, nextFrame)
  t.equals(score, 13, 'scores a spare frame')
  t.end()
})

test('scores a single strike', function (t) {
  var frame = [10, 0]
  var nextFrame = [8, 1]
  var score = game.scoreFrame(frame, nextFrame)
  t.equals(score, 19)
  t.end()
})
