function describeFruit(fruit) {
    switch(fruit) {
        case 'apple':
            console.log("It's a red fruit");
            break;
        case 'banana':
            console.log("It's a yellow fruit");
            break;
        case 'pear':
            console.log("It's a green fruit");
            break;
        default:
            console.log("Fruit color unknown");
    }
}

// Test the function with different fruits
describeFruit('apple');
describeFruit('banana');
describeFruit('pear');
describeFruit('orange'); // This will trigger the default case