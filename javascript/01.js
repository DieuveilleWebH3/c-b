
console.log("Hello World from DIEUVEILLE");

/* 
    Best Way I came up with : 4 out 5 
    To reach excellence (5/5), must include character length in regex 
*/
function UsernameValidation(str) {
  
    if (str.length >= 4 && str.length < 25 && str.match(/^[a-zA-Z]+[a-zA-Z0-9_]+(?<!_)$/)) return true;
  
    return false; 
  
}
     





console.log(" == INPUT == ", "\n", "aa_");
console.log(" == OUTPUT == ", "\n", UsernameValidation("aa_"));

console.log("\n");

console.log(" == INPUT == ", "\n", "u__hello_world123");
console.log(" == OUTPUT == ", "\n", UsernameValidation("u__hello_world123"));

console.log("\n");

console.log(" == INPUT == ", "\n", "abcdefghijklmnopqrstuvwxyz");
console.log(" == OUTPUT == ", "\n", UsernameValidation("abcdefghijklmnopqrstuvwxyz"));

console.log("\n");

console.log(" == INPUT == ", "\n", "abcdefghijklmnopqrstuvwx");
console.log(" == OUTPUT == ", "\n", UsernameValidation("abcdefghijklmnopqrstuvwx"));

console.log("\n");

// keep this function call here 
// console.log(UsernameValidation(readline()));
