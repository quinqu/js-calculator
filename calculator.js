
const prompt = require('prompt');

const calculateUserInput = function(error, input) {
  console.log(input);
  console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', input);


  calculate(input);
}  

prompt.start();

prompt.get(['num1','num2','operation'], calculateUserInput);

function calculate(input) {
  if (isNaN(input.num1) || isNaN(input.num2) || typeof input.num1 === "boolean" || typeof input.num2 === "boolean") throw "invalid input";

  if(input.operation === "add" || input.operation === "+"){

    let add = parseInt(input.num1) + parseInt(input.num2);
    console.log(input.num1 + " + " + input.num2 + " = " + add);

  }else if(input.operation === "subtract" || input.operation === "-"){

    let subtract = parseInt(input.num1) - parseInt(input.num2);
    console.log(input.num1 + " - " + input.num2 + " = " + subtract);
    
  }else if(input.operation === "multiply" || input.operation === "*"){
    let multiply = parseInt(input.num1) * parseInt(input.num2);
    console.log(input.num1 + " * " + input.num2 + " = " + multiply);
    
  }else if(input.operation === "divide" || input.operation === "/"){

      if(input.num2 == 0){
        throw "Cannot divide by 0";
      }else{
        let divide = parseInt(input.num1)/parseInt(input.num2);
        console.log(input.num1 + " / " + input.num2 + " = " + divide);
      }

  }else {
    console.log("Invalid operation");
  }
}