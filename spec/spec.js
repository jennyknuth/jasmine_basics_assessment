var grader = require('./../grader.js');

var arr1 = [90, 95, 87, 60];
var arr2 = [52, 80, 80, 86, 94];
var arrEven = [52, 80, 81, 54, 86, 94];
var arr3 = [82, 92, 75, 91, 92, 89, 95, 100, 86];
var arrMultiMode = [82, 92, 75, 91, 80, 92, 89, 95, 100, 86, 80];
var threeMode = [1,1,1,2,2,2,3,3,3, 4, 5];
//var letterMulti = ['A', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'C',];

describe('#grade()', function(){
 it('takes a test score and returns the equivalent letter grade.', function() {
   expect(grader.grade(98)).toEqual('A+');
  //  expect(grader.grade(100)).toEqual('A+');
  //  expect(grader.grade(89)).toEqual('B+');
  //  expect(grader.grade(75)).toEqual('C');
  //  expect(grader.grade(72)).toEqual('C-');
  //  expect(grader.grade(59)).toEqual('F');
  //  expect(grader.grade(0)).toEqual('F');
 });
});

describe('#average()', function(){
 it('take an array of test scores and returns the average score', function() {
   expect(grader.average(arr1)).toEqual(83);
   expect(grader.average(arr2)).toEqual(78.4);
   expect(grader.average(arr3)).toEqual(802 / 9);
 });
});

describe('#median()', function(){
 it('take an array of test scores and calculates the median score.', function() {
   expect(grader.median([20])).toEqual(20);
   expect(grader.median(arr2)).toEqual(80);
   expect(grader.median(arrEven)).toEqual(80.5);
 });
});

describe('#mode()', function(){
 it('take an array of test scores and calculates the mode score.', function() {
   expect(grader.mode(arr3)).toEqual(92);
   expect(grader.mode(arr2)).toEqual(80);
   expect(grader.mode(arrMultiMode)).toEqual([80, 92]);
   expect(grader.mode(threeMode)).toEqual([1, 2, 3]);
   //expect(grader.mode(letterMulti)).toEqual(['A', 'B', 'C']);
 });
});
