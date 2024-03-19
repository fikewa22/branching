// // 1. Write a JavaScript program to list the properties of a JavaScript object.
// const newObj = { name: 'Fikewa', age: 90, city: 'Ile-Ife' };
// console.log(Object.keys(newObj));

// // 2. Write a JavaScript program to delete a specific property from an object.
// delete newObj.age;
// console.log(newObj);

// // 3. Write a JavaScript program to get the length of a JavaScript object.
// console.log(Object.keys(newObj).length);

// // 4. Write a JavaScript program to check if a specific property exists in an object.
// console.log('age' in newObj);

// // 5. Write a JavaScript program to access nested properties of an object.
// const nestedObj = { person:
//     { name: 'Fikewa',
//     age: 92,
//     address:
//     { city: 'Ile-Ife',
//     country: 'Nigeria' } } };
// console.log(nestedObj.person.address.city);

// // 6.Write a JavaScript program to iterate over the properties of an object.
// for (const key in newObj) {
//     console.log(key, newObj[key]);
//   }

// // 7. Write a JavaScript program to clone an object.
// const clone = { ...newObj };
// console.log(clone);

// // 8. Write a JavaScript program to merge two objects into one.
// const obj1 = { name: 'Fikewa', age: 62 };
// const obj2 = { city: 'Ile-Ife', country: 'Nigeria' };
// const merged = { ...obj1, ...obj2 };
// console.log(merged);


// // 9. Write a JavaScript program to convert an object to a JSON string.
// console.log(JSON.stringify(newObj));

// // 10. Write a JavaScript program to convert a JSON string to an object.
// const jsonString = '{"name":"Fikewa","age":65,"city":"Ile-Ife"}';
// const obj = JSON.parse(jsonString);
// console.log(obj);

// // 11. Write a JavaScript program to check if two objects are equal.
// function objectsAreEqual(obj1, obj2) {
//     return JSON.stringify(obj1) === JSON.stringify(obj2);
//   }
//   console.log(objectsAreEqual({ name: 'Fikewa' }, { name: 'Fikewa' }));


// 12. Write a JavaScript program to check if an object is empty.
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  console.log(isEmpty({}));
  console.log(isEmpty({ name: 'Fikewa' }));
//   13) Write a JavaScript program to access object methods and invoke them.
const person = {
    name: 'Fikewa',
    greet: function() {
      console.log('Hello, my name is ' + this.name);
    }
  };
  
  person.greet();

//   14) Write a JavaScript program to handle exceptions using try-catch statements.
try {
    console.log(undeclaredVariable);
  } catch (error) {
    console.log('An error occurred:', error.message);
  } finally {
    console.log('Try-catch finished.');
  }

//   15) Write a JavaScript program to throw a custom error and handle it using try-catch statements.
function checkAge(age) {
    if (age < 18) {
      throw new Error('Access denied - you are too young!');
    } else {
      console.log('Access granted.');
    }
  }

  try {
    checkAge(16);
  } catch (error) {
    console.log('Caught an error:', error.message);
  } finally {
    console.log('Process completed.');
  }
