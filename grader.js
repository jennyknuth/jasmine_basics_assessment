module.exports = {

  grade: function (num) {
    var grade = '',
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

  average: function (arr) {
    var sum = 0
    arr.forEach(function (element) {
      sum += element
    })
    return sum / arr.length
  },

  median: function (arr) {
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

  mode: function (arr) {
    var dict = {}
    var max = 0
    var mostFreq = -1
    var multiArr = []
    if (arr.length === 1) {
      return arr[0]
    }
    arr.forEach(function (element) {
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
    for (var key in dict) {
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
