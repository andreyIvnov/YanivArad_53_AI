//  Write a C# function that checks if a given string is a palindeome


//  First, define the function called "IsPalindrome" that takes a string as input
//  next, convert the string to lowercase to avoid case sensitivity
//  than, iterate throught the string and compare the characters at the beginning and end.
//  If the match, move inwards one character at a time and repeat the comparison
//  If all charactares match, return true, else return false
using System;
using System.Linq;
public class PalindromeChecker
{
    public static bool IsPalindrome(string s)
    {
        // Convert the string to lowercase
        s = s.ToLower();

        // Get the length of the string
        int length = s.Length;

        // Iterate through the string
        for (int i = 0; i < length / 2; i++)
        {
            // Compare characters at the beginning and end
            if (s[i] != s[length - 1 - i])
            {
                return false; // Not a palindrome
            }
        }

        return true; // Is a palindrome
    }
}