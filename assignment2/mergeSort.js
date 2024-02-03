// Recursively implemented Merge Sort (Top Down Merge Sort) 

// Unsorted test arrays
let array = [3, 2, 1, 13, 8, 5, 0, 1];
let arrayB = [105, 79, 100, 110]
let arrayC = [14, 7, 3, 12, 9, 11, 6, ]

function mergeSort(array) {
    //Base case: An array with 1 or 0 element is sorted by definition
    if (array.length <= 1) return array
    
    // Calculate mid point and divide the list into equal-sized sublists
    let mid = Math.floor(array.length/2) //Math.floor rounds down to an integer

    // Recursively sort both sublists.
    let leftSubArray = mergeSort(array.slice(0, mid))
    let rightSubArray = mergeSort(array.slice(mid))

    // Merge the sorted sublists.
    return merge(leftSubArray, rightSubArray)
}

// Detailed Pseudocode for Top Down Merge
// https://en.wikipedia.org/wiki/Merge_sort#Top-down_implementation_using_lists

function merge(left, right) {
    let sortedArray = [];
    
    // If both arrays have an element, compare whether the value in 
    // the left list is higher. If so, append it to the sortedArray,
    // and remove the added value from the left sub array. Else,
    // add the value from the right sub array.
    while (left.length !=0 && right.length !=0) {
        if (left[0] <= right[0]) {
            sortedArray.push(left[0]);
            left = left.slice(1, left.length+1);
        } else {
            sortedArray.push(right[0]);
            right = right.slice(1, right.length+1);
        }
    
    // If the left or right have any values left; add them to the sorted array.
    } while (left.length !=0) {
        sortedArray.push(left[0]);
        left = left.slice(1, left.length+1);
    } while (right.length !=0) {
        sortedArray.push(right[0]);
        right = right.slice(1, right.length+1);
    } 
    return sortedArray;
}

// Top Down Merge Sort followinf pseudocode from https://en.wikipedia.org/wiki/Merge_sort#Top-down_implementation_using_lists
// Output is equivalent to mine, as expected.
function mergeSortWiki(array) {
    if (array.length <= 1) return array
    
    let leftSubArray = []
    let rightSubArray = []

    for( let i = 0; i < array.length; i++) {
        if (i < array.length/2) {
            leftSubArray.push(array[i])
        } else {
            rightSubArray.push(array[i])
        }
    }
    
    leftSubArray = mergeSortWiki(leftSubArray)
    rightSubArray = mergeSortWiki(rightSubArray)

    // Merge the sorted sublists.
    return merge(leftSubArray, rightSubArray)
}


console.log(mergeSort(array))
console.log(mergeSortWiki(array))
console.log(mergeSort(arrayB))
console.log(mergeSort(arrayC))

