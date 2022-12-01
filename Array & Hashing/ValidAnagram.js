// compare 2 string 
// return true if 2 string is anagram
// return false if 2 string is not anagram
// s1 : "anagram"         s2: "nagaram"       => true
// s1 : "rat"             s2: "car"           => false

function checkAnagram(s1, s2){
    if( s1.length != s2.length) return false;

    for ( var i = 0; i < s1.length; i++){

    }
    return true;
}

var a = "danh"

var b = "hand"

var c = checkAnagram(a,b);

console.log(c);