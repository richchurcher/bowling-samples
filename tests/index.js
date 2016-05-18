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
