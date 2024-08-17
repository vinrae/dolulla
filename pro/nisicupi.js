// Suppose facesInCorner is an array of objects representing different faces of a 3D model at a specific corner
let facesInCorner = [
    { id: 1, vertices: [/*...*/], color: 'red' },
    { id: 2, vertices: [/*...*/], color: 'blue' },
    // More face objects...
];

// Assume 'n' is an index that we have determined based on some condition or user input
let n = 1;

// We want to get the face at index 'n'
let mainN = facesInCorner[n];

console.log(mainN);
// Output will be the face object at index 1
