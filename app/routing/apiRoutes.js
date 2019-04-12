// Your `apiRoutes.js` file should contain two routes:
//    * A GET route with the url `/api/employees`. This will be used to display a JSON of all possible employees.
//    * A POST routes `/api/employees`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

let employeeList = require('../data/employees.js');

module.exports = function (app) {

  /**
   * GET the employee list 
   */
  app.get('/api/employees', function (req, res) 
  {
    res.json(employeeList);
  });


 
  const totalScore= function(emp)
  {
    let sum=0;
    for (let i=0; i<emp.scores.length; i++)
    {
      sum += parseInt(emp.scores[i]);
    }
    console.log("Sum:" + sum);
    return (sum);
  }
 /**
   * Add the employee to the employeeList and find the matching employee
   * Otherwise add the new reservation to the waitlist
   */
  app.post('/api/employees', function (req, res) 
  {
    let i =0;
    let newEmployee = req.body;
    employeeList.push(newEmployee);
    // console.log("First comment: " + employeeList.length);
    let matchEmpIndex = -1;
    let scoreDiff = 100; //Total max score for 10 questions is 50; So max scoreDiff can be only 50; To initialize, make it a BIG value;
    for (i=0; i < employeeList.length - 1; i++) //Dont include the current employee that was pushed just not to the list
    {
      let tempDiff =  totalScore(employeeList[employeeList.length-1]) - totalScore(employeeList[i]);
      if (Math.abs(tempDiff) < scoreDiff)
      {
        scoreDiff = Math.abs(tempDiff);
        matchEmpIndex = i;
      }
    }
    console.log("Match found at " + matchEmpIndex);
    res.json(employeeList[matchEmpIndex]);
    // res.end();
  });
}
