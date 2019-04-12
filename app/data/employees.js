// ===============================================================================
// DATA
// Below data will hold all of the employee data
//
// But you could have it be an empty array as well.
// ===============================================================================


var employeeArray = [
  {
    name:"Ahmed",
    scores:[
      5,
      1,
      4,
      5,
      2,
      1,
      2,
      3,
      4,
      1
    ]

  }
  
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = employeeArray;
// module.exports = employeeArray.totalScore;
