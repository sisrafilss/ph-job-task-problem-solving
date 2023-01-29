// Test Data
const array = [1, 2, 3, 4, 5]; 
const rotation = 2;

// Testing ->
console.log(`Before Rotation the Array is:`, array);
// function call
rotateLeft(array, rotation);
console.log(`After ${rotation} Left Rotation the Array is:`, array);



// left rotate the array element rotation (rotation is the input) times
function rotateLeft(array, rotation) {
    const len = array.length;
    let actualRotation = rotation % len;

    for (let i = 0; i < actualRotation; i++) {
        let tmp = array[0];
        for (let j = 0; j < len - 1; j++) {
            array[j] = array[j+1];
        }
        array[len-1] = tmp;
    }
}