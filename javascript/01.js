
// console.log("Hello World from DIEUVEILLE");

function CodelandUsernameValidation(str) { 

    // code goes here  
  
    if (str.match(/^[a-zA-Z]+[a-zA-Z0-9_]+(?<!_)$/)) return true;
  
    return false; 
  
  }
     
  // keep this function call here 
  console.log(CodelandUsernameValidation(readline()));
  