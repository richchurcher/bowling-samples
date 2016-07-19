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

test('scores two strikes', function (t) {
  var frame = [10, 0]
  var nextFrame = [10, 0]
  var finalFrame = [7, 1]
  var score = game.scoreFrame(frame, nextFrame, finalFrame)
  t.equals(score, 27)
  t.end()
})

test('scores a game with two balls in last frame', function (t) {
  var frames = [
    [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
  ]
  var score = game.score(frames)
  t.equals(score, 119)
  t.end()
})

test('scores a game recursively', function (t) {
  var frames = [
    [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
  ]
  var start = Date.now()
  var score = game.scoreRecursive(frames)
  var finish = Date.now()
  t.equals(score, 119)
  console.log(`ELAPSED: ${finish - start}ms`)
  t.end()
})

test('scores a game with sumBy', function (t) {
  var frames = [
    [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
  ]
  var start = Date.now()
  var score = game.scoreWithSumBy(frames)
  t.equals(score, 119)
  var finish = Date.now()
  console.log(`ELAPSED: ${finish - start}ms`)
  t.end()
})

test('scores a game with complex ending', function (t) {
  var frames = [
    [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
  ]
  var start = Date.now()
  var score = game.scoreWithSumBy(frames)
  t.equals(score, 141)
  var finish = Date.now()
  console.log(`ELAPSED: ${finish - start}ms`)
  t.end()
})
