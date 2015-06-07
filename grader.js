module.exports = {

  grade: (num) => {
    let grade = '',
      firstLetter = (num + '').charAt(0),
      secondLetter = (num + '').charAt(1),
      firstDigit = parseInt(firstLetter, 10),
      secondDigit = parseInt(secondLetter, 10)

    if (num >= 100) {
      grade = 'A+'
      return grade
    } else if (firstDigit <= 5) {
      grade = 'F'
      return grade
    } else if (firstDigit <= 6) {
      grade = 'D'
    } else if (firstDigit <= 7) {
      grade = 'C'
    } else if (firstDigit <= 8) {
      grade = 'B'
    } else {
      grade = 'A'
    }
    // add + or -
    if (secondDigit < 4) {
      grade = grade + '-'
    } else if (secondDigit > 6) {
      grade = grade + '+'
    } return grade
  },

  average: (arr) => {
    let sum = 0
    arr.forEach(element => {
      sum += element
    })
    return sum / arr.length
  },

  median: (arr) => {
    arr.sort()
    if (arr.length === 1) {
      return arr[0]
    }
    if (arr.length % 2 === 0) {
      return (arr[(arr.length / 2) - 1] + arr[arr.length / 2]) / 2
    } else {
      return arr[(arr.length - 1) / 2]
    }
  },

  mode: (arr) => {
    let dict = {}
    let max = 0
    let mostFreq = -1
    let multiArr = []
    if (arr.length === 1) {
      return arr[0]
    }
    arr.forEach(element => {
      if (dict[element] > 0) {
        dict[element] += 1
        if (max <= dict[element]) {
          max = dict[element]
          mostFreq = element
        }
      } else {
        dict[element] = 1
      }
    })
    for (let key in dict) {
      if (dict[key] === max) {
        multiArr.push(parseInt(key, 10))
      }
    }
    if (multiArr.length === 1) {
      return mostFreq
    } else {
      return multiArr.sort()
    }
  }
}
