
var car = {

    model:"BMW",
    
    year:2023,
    
    color: "red",
    
    start: function(){
    console.log("starting")
    },
    
    stop: function(){
        console.log("stopping")
    }
    
    };
    
    
    var carModel = car.model;
    var carYear = car.year;
    var carColor = car.color;
    
    car.start();
    car.stop();
    
    
    console.log({ carModel, carYear, carColor});

    var car = {

        model: "BMW",
        
        year:2023,
        
        color: "red",
        
        start: function(){
        
        console.log("starting")
        
        },
        
        stop: function(){
            console.log("stopping")
        }
        
        };
        
        
        var carModel = car.model;
        var carYear = car.year;
        var carColor = car.color;
        
        car.start();
        car.stop();
        
        
        console.log({ carModel, carYear, carColor});
        
        
        
        try{
         
        var a = mary+abdul+steph
           
        
        }
        catch(err){
        
        console.log(err.message)
            console.log("error occurred. ")
        }


    //Write a JavaScript program to list the properties of a JavaScript object.
    // const person = {
    //     firstName: 'John',
    //     lastName: 'Doe',
    //     age: 30,
    //     address: {
    //       street: '123 Main St',
    //       city: 'New York',
    //       state: 'NY',
    //       country: 'USA'
    //     }
    //   };
    //   console.log(person.firstName + " \n"  + person.lastName + "/n" + person.age + "\n" + person.address.street + "\n" + person.address.city + "\n" + person.address.state + "\n" + person.address.country);


      //Write a JavaScript program to delete a specific property from an object.

    //   const person = {
    //     firstName: 'John',
    //     lastName: 'Doe',
    //     age: 30,
    //     address: {
    //       street: '123 Main St',
    //       city: 'New York',
    //       state: 'NY',
    //       country: 'USA'
    //     }
    //   };
    //   delete person.address.street;
    //   console.log(person.address.street);


      //Write a JavaScript program to check if a specific property exists in an object.

    //   const person = {
    //         firstName: 'John',
    //         lastName: 'Doe',
    //         age: 30,
    //         address: {
    //           street: '123 Main St',
    //           city: 'New York',
    //           state: 'NY',
    //           country: 'USA'
    //         }
    //       };
    //       console.log(person.firstName);

          //Write a JavaScript program to access nested properties of an object.

        //   const person = {
        //     firstName: 'John',
        //     lastName: 'Doe',
        //     age: 30,
        //     cars: {
        //       car1: "BMW",
        //       car2: "BENZ",
        //     }
        //   };
        //   console.log(person.cars["car2"]);

          //Write a JavaScript program to get the length of a JavaScript object.

// const person = {
//   firstname: "John",
//   lastname: "Doe",
//   age: 21
// };

// const objectLength = Object.keys(person).length;
// console.log(objectLength);

// Write a JavaScript program to iterate over the properties of an object.

// const person = {
//     name: "Simon",
//     age: 20,
//     clothing: {
//       style: "simple",
//       hipster: false
//     }
//   };
  
//   for (const prop in person) {
//     console.log(prop + ": " + person[prop]);
//   }

//   7) Write a JavaScript program to clone an object.

//   const userDetails = {
//     name: "John Doe",
//     age: 14,
//     verified: false
//   };
  
//   const cloneUser = {  country: "Nigeria", age: 25, ...userDetails,};
//   console.log(cloneUser); 

//8) Write a JavaScript program to merge two objects into one.

// const person = {
//     firstName: 'Rossy',
//     lastName: 'Nduka',
//     age: 25,
//   };
  
//   const job = {
//     jobTitle: 'JavaScript Developer',
//     location: 'Remote',
//   };
  
//   const employee = { ...person, ...job };
//   console.log(employee);
  
//9) Write a JavaScript program to convert an object to a JSON string.

// const person = {
//     name: "John",
//     age: 30,
//     verified: true
//   };
  
//   const jsonString = JSON.stringify(person);
//   console.log(jsonString);
//   console.log(person);

//10) Write a JavaScript program to convert a JSON string to an object.

// const jsonString = '{"name": "John", "age": 30, "city": "New York"}';

// try {
//   const parsedObject = JSON.parse(jsonString);
//   console.log(parsedObject);
// } catch (error) {
//   console.error('Error parsing JSON:', error.message);
// }


//11) Write a JavaScript program to check if two objects are equal.

// const obj1 = { name: 'Alice', age: 30 };
// const obj2 = obj1 ; // { name: 'Alice', age: 30 }; 
// var a = 10;
// var b = a;

// console.log(obj1 === obj2);
// console.log({a, b});
// b = 5;
// console.log({a, b});
// console.log({obj1, obj2});
// obj2.name = "mary"
// console.log({obj1, obj2});

//12) Write a JavaScript program to check if an object is empty.

// const person = {}; 

// if (Object.keys(person).length === 0) {
//   console.log("The object is empty!");
// } else {
//   console.log("The object is not empty.");
// }

//13) Write a JavaScript program to access object methods and invoke them.

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
// const fullNameResult = person.fullName();
// console.log(fullNameResult); 

//14) Write a JavaScript program to handle exceptions using try-catch statements.

// try {
   
//     const result = 10 / 0; 
//     console.log("Result:", result); 
//   } catch (error) {

//     console.error("An error occurred:", error.message);
//   } finally {
    
//     console.log("Cleanup or finalization steps here");
//   }
  
//   console.log("Program continues after handling the error");
  

//15) Write a JavaScript program to throw a custom error and handle it using try-catch statements


// function ValidationException(number, message) {
//     this.message = message;
//     this.name = "CustomException";
//     this.number = number;
// }


// function myFunction(dayOfWeek) {
//     if (dayOfWeek > 7) {
//         throw new ValidationException(dayOfWeek, "Only 7 days in a week!");
//     }
// }

// try {
//     const userInput = prompt("Enter a day of the week (1-7):");
//     const day = parseInt(userInput);

    
//     myFunction(day);

//     console.log("Valid input:", day);
// } catch (error) {
//     console.error("Error:", error.message);
// }

