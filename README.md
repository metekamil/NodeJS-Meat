Usage Example:

 //Required files 
 meat = require('./nodejs-meat');

//Declaring variables  
var meat, bones, food;

//Add Bones
bones = "<body> My name is {firstName} {lastName} </body>";

//Add Food
food = { firstName : "Clint", lastName : "Eastwood"};

//Calling replacement function
meat = meat.process(bones,food);

//Display results
console.log(meat);
