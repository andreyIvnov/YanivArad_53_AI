// #Write a JS function that checks if a given string is a palindeome
// #First, define the function called "is_palindrome" that takes a string as input
// # next, convert the string  to lowercase to avoid case sensitivity
// #than, iterate throught the string and compare the characters at the beginning and end.
// #If the match, move inwards one character at a time and repeat the comparison
// #If all charactares match, return True, else return False

function is_palindrome(s) {
    // Convert the string to lowercase
    s = s.toLowerCase();
    
    // Initialize pointers for the start and end of the string
    let left = 0;
    let right = s.length - 1;

    // Iterate while the left pointer is less than the right pointer
    while (left < right) {
        // Compare characters at the left and right pointers
        if (s[left] !== s[right]) {
            return false; // Not a palindrome if characters don't match
        }
        // Move towards the center of the string
        left++;
        right--;
    }
    
    return true; // All characters matched, it's a palindrome
}