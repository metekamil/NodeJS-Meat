//main.js

(function() {

    //Requiring files 
    meat = require('./nodejs-meat');

    //Declaring variables  
    var meat, bones, food;

    //Add Bones
    bones = "<body> My name is {name} </body>";

    //Add Food
    food = { name : "Clint Eastwood"};

     //Calling replacement function
     meat = meat.process(bones,food);

     //Display results
     console.log(meat);

    

}).call(this)