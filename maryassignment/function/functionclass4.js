//Write a function that takes a string as an argument and returns the reversed version of the string.

//function reverseString(str) {
    function reverseString(str) { 
        let reversedStr = ""; 
        let i = str.length - 1; 
        while (i >= 0) { 
          reversedStr += str.substring(i, i + 1); 
          //console.log(reversedStr); 
          i--; 
        } 
        console.log(reversedStr); 
    } 
      
    // Function call 
   // reverseString("HIC cohost"); 
   // reverseString("Rosemary"); 
    reverseString("TypeScript");