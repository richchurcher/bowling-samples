module.exports = {
  scoreFrame: scoreFrame
}

function scoreFrame (frame, nextFrame) {
  if (frame[0] === 10) {
    return frame[0] + nextFrame[0] + nextFrame[1]
  }

  var score = frame[0] + frame[1]
  if (score === 10) {
    return 10 + nextFrame[0]
  }
  return frame[0] + frame[1]
}
