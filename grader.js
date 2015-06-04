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


  }





}
