NodeJS Meat
===========

## Installation

**npm install nodejs-meat**  
  
## Usage Example:

 **Required files**  
 meat = require('./nodejs-meat');

**Declaring variables**  
var meat, bones, food;

**Add Bones**  
bones ="<body> My name is {firstName} {lastName} </body>";

**Add Food**   
food = { firstName : "Mete", lastName : "Kamil"};

**Calling replacement function**   
meat = meat.process(bones,food);

**Display results**   
console.log(meat);

## Bones  
bones ="<body> My name is {firstName} {lastName} </body>";

## Food   
food = { 
          firstName : "Mete", 
          lastName : "Kamil"
      };

## Output   
My name is Clint Eastwood

  
