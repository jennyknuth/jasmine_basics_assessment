module.exports = {

  grade: function(num){
    var grade = '';
    var firstDigit = parseInt((num + '').charAt(0));
    var secondDigit = parseInt((num + '').charAt(1));

    if (num === 100){
      return grade = 'A+';
    }
    else if (firstDigit<=5){
      return grade = 'F';
    }
    else if (firstDigit <= 6){
      grade = 'D';
    }
    else if (firstDigit <= 7){
      grade = 'C';
    }
    else if (firstDigit <= 8){
      grade = 'B';
    }
    else{
      grade = 'A';
    }

    //add + or -
    if (secondDigit < 4){
      grade = grade + '-';
    }
    else if (secondDigit > 6 && secondDigit <= 9){
      grade = grade + '+';
    }
    return grade;
  },

  average: function(arr){
    sum = 0;
    arr.forEach(function(element){
      sum += element;
    });
    return sum/arr.length;
  },

  median: function(arr){
    var index = arr.length;
    arr.sort();
    if (arr.length === 1){
      return arr[0];
    }
    if (arr.length % 2 === 0){
      return (arr[(arr.length/2)-1] + arr[arr.length/2])/2;
    }
    else {
      return arr[(arr.length - 1)/2];
    }
  },

  mode: function(arr){
    var dict = {};
    var max = 0;
    var mostFreq = -1;
    var multiArr = [];

    arr.forEach(function(element){
      if (dict[element] > 0){
        dict[element] += 1;
        if (max <= dict[element]){
          max = dict[element];
          mostFreq = element;
          // multiArr.push(element);
          // console.log(multiArr);
          //console.log('mostFreq', mostFreq);
        }
      }
      else {
        dict[element] = 1;
        //console.log("subsequent", dict)
      }
    });
    for (key in dict){
      if (dict[key]===max){
        multiArr.push(parseInt(key));
      }
    }
    if (multiArr.length === 1){
      return mostFreq;
    }
    else {

      return multiArr.sort();
    }
  }
}
