module.exports = {
  scoreFrame: scoreFrame
}

function scoreFrame (frame, nextFrame) {
  var score = frame[0] + frame[1]
  if (score === 10) {
    return 10 + nextFrame[0]
  }
  return frame[0] + frame[1]
}
