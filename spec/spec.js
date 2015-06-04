var grader = require('./../grader.js');

describe('#grade()', function(){
 it('takes a test score and returns the equivalent letter grade.', function() {
   expect(grader.grade(98)).toEqual('A+');
   expect(grader.grade(100)).toEqual('A+');
   expect(grader.grade(89)).toEqual('B+');
   expect(grader.grade(75)).toEqual('C');
   expect(grader.grade(72)).toEqual('C-');
   expect(grader.grade(59)).toEqual('F');
   expect(grader.grade(0)).toEqual('F');
 });
 xit('take two strings and concatenate', function() {
   expect(myCode.sum('foo', 'bar')).toEqual('foobar');
 });
});
// averageScore([90, 95, 87, 60]);
// medianScore([52,80,80,86,94]);
// modeScore([82, 92, 75, 91, 92, 89, 95, 100, 86]);
