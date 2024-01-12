// You have an array of letters. Return the number of possible sequences of letters you can make using the letters in the array. Extra credit: print the sequences!

// Example:

// letters(['X'])
// 1

// letters(['A', 'A', 'B'])
//  8 // "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA"

//Solving the problem creating two different functions -

//Create a sequences Set and return the size of the set. 
function countSequences(letters){
    let sequences = new Set();
    function permute(array, sequence=""){
        //base case
        if(sequence.length > 0){
            sequences.add(sequence);
        }
        for(let i=0; i < array.length; i++){
            let newArray = array.slice();
            newArray.splice(i, 1);
            permute(newArray, sequence + array[i])
        }
    }
    permute(letters);
    return sequences.size;
}

function generateSequences(letters) {
    let sequences = new Set();
    function permute(arr, sequence = '') {
        if (sequence.length > 0) {
            sequences.add(sequence);
        }
        for (let i = 0; i < arr.length; i++) {
            let newArr = arr.slice();
            newArr.splice(i, 1);
            permute(newArr, sequence + arr[i]);
        }
    }
    permute(letters);
    return Array.from(sequences);
}

// Test the functions
let letters1 = ['X'];
let letters2 = ['A', 'A', 'B'];

console.log(countSequences(letters1)); // Output: 1
console.log(generateSequences(letters1)); // Output: ['X']

console.log(countSequences(letters2)); // Output: 8
console.log(generateSequences(letters2)); // Output: ['A', 'AA', 'AAB', 'AB', 'ABA', 'B', 'BA', 'BAA']
