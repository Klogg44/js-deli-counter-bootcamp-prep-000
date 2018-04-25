function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    let upNow = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${upNow}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    let string = "The line is currently: ";
    for (let i=0; i<katzDeliLine.length; i++) {
      let line = katzDeliLine
      line[i] +=
      string += position;
    }
    return string
  } else {
    return "The line is currently empty.";
  }
}