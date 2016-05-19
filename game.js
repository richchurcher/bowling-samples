module.exports = {
  scoreFrame: scoreFrame
}

Array.prototype.sum = function () {
  return this.reduce(function (sum, n) {
    if (typeof n === 'number') {
      return sum + n
    }
    return sum
  }, 0)
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
