// 1. **Creating and Accessing Arrays**:
//    - Define an array named `colors` containing three colors: "red", "green", and "blue". Print the second color in the array.

const colors=["red", "green", "blue"];
console.log(colors[1])

// 2. **Array Methods - Push and Pop**:
//    - Add the color "yellow" to the end of the `colors` array using the `push()` method. Then remove the last color from the array using the `pop()` method.
colors.push("yellow")
console.log(colors)
colors.pop()
console.log(colors)

// 3. **Array Methods - Unshift and Shift**:
//    - Add the color "orange" to the beginning of the `colors` array using the `unshift()` method. Then remove the first color from the array using the `shift()` method.
colors.unshift("orange")
console.log(colors)
colors.shift()
console.log(colors)

// 4. **Finding Elements in Arrays**:
//    - Create an array named `numbers` containing some numbers. Use the `indexOf()` method to find the index of the number 7 in the array.

const numbers=[1, 6, 8, 7, 10, 51]
const index = numbers.indexOf(10);
console.log(index)

// 5. **Array Length**:
//    - Determine the number of elements in the `numbers` array using the `length` property.

const length= numbers.length
console.log(length)

// 6. **Iterating Over Arrays**:
//    - Iterate over the `colors` array using a `for` loop and print each color to the console.
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// 7. **Array Method - Concat**:
//    - Create another array named `moreColors` containing additional colors. Use the `concat()` method to combine the `colors` array and the `moreColors` array into a single array named `allColors`.
let moreColors = ["Orange", "Purple", "Yellow"];
let allColors = colors.concat(moreColors);
console.log(allColors);

// 8. **Array Method - Slice**:
//    - Create a subset of the `allColors` array containing only the first three colors using the `slice()` method.
const firstThreeColors = allColors.slice(0, 3);
console.log(firstThreeColors);

// 9. **Array Method - Splice**:
//    - Remove the second and third colors from the `allColors` array and replace them with the colors "purple" and "pink" using the `splice()` method.
allColors.splice(1, 2, "purple", "pink");
console.log(allColors);

// 10. **Array Method - forEach**:
//    - Use the `forEach()` method to iterate over the `numbers` array and print each number multiplied by 2 to the console.
numbers.forEach(number => {
    console.log(number * 2);
  });