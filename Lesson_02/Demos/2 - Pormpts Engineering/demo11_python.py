 #Write a PY function that checks if a given string is a palindeome
 #First, define the function called "is_palindrome" that takes a string as input
 # next, convert the string  to lowercase to avoid case sensitivity
 #than, iterate throught the string and compare the characters at the beginning and end.
 #If the match, move inwards one character at a time and repeat the comparison
 #If all charactares match, return True, else return False

def is_palindrome(s):
    # Convert the string to lowercase
    s = s.lower()
    
    # Initialize pointers for the start and end of the string
    start = 0
    end = len(s) - 1
    
    # Iterate while the start pointer is less than the end pointer
    while start < end:
        # Compare characters at the start and end pointers
        if s[start] != s[end]:
            return False  # Not a palindrome if characters don't match
        start += 1  # Move the start pointer forward
        end -= 1    # Move the end pointer backward
    
    return True  # All characters matched, it's a palindrome