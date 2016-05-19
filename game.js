module.exports = {
  score: score,
  scoreFrame: scoreFrame,
  scoreRecursive: scoreRecursive,
  scoreWithSumBy: scoreWithSumBy
}

function score (frames) {
  return frames.reduce(function (sum, frame, i) {
    var end = i < frames.length - 3 ? i + 3 : undefined
    var chunk = frames.slice(i, end)
    return sum + scoreFrame(chunk[0], chunk[1], chunk[2])
  }, 0)
}

function scoreRecursive (frames) {
  if (frames.length === 1) {
    return scoreFrame(frames[0])
  }

  var score = scoreFrame(frames[0], frames[1], frames[2])
  return score + scoreRecursive(frames.slice(1))
}

function scoreWithSumBy (frames) {
  return frames.sumBy(function (sum, n, i) {
    return sum + scoreFrame(frames[i], frames[i + 1], frames[i + 2])
  }, 0)
}

Array.prototype.sum = function () {
  return this.reduce(function (sum, n) {
    if (typeof n === 'number') {
      return sum + n
    }
    return sum
  }, 0)
}

Array.prototype.sumBy = function (fn, accumulator) {
  if (typeof fn !== 'function') {
    return undefined
  }
  return this.reduce(fn, accumulator)
}

function scoreFrame (frame1, frame2, frame3) {
  var strike = handleStrikes(frame1, frame2, frame3)
  if (strike) {
    return strike
  }
  var spare = handleSpares(frame1, frame2)
  if (spare) {
    return spare
  }
  return frame1.sum()
}

function handleStrikes (frame1, frame2, frame3) {
  if (!isStrike(frame1)) {
    return null
  }

  if (isStrike(frame2)) {
    return 20 + frame3[0]
  }
  return 10 + frame2.sum()
}

function handleSpares (frame1, frame2) {
  if (!isSpare(frame1)) {
    return null
  }
  return 10 + frame2[0]
}

function isStrike (frame) {
  return frame[0] === 10
}

function isSpare (frame) {
  return frame.sum() === 10
}
