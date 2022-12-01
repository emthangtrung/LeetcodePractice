// Input: nums = [1,2,3,1]
// Output: true

// Input: nums = [1,2,3,4]
// Output: false

// return true if arr contain duplicate element
// return false if every element is unique

var nums = [1, 2, 3, 4, 5, 6, 7] // false
var nums2 = [1, 2, 4, 1, 6] //true

function findDuplicate(arr){
    for ( var i = 0; i < arr.length; i++){
       for ( var j = 0; j < i; j++){
            if (arr[i] === arr[j]){
                return true;
            }
        }
    }
    return false;
}

v
console.log(test);

console.log(findDuplicate(nums));





