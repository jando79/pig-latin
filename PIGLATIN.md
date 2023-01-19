Describe: pigLatin()

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"

Test: "It will add 'ay' to the end of consinents"
Code: pigLatin("b");
Expected Output: "bay"

Test: "It will only apply "ay" to the first letter in a word"
Code: pigLatin ("bat");
Expected OUtput: "bayat"

Test: "It will correctly understand how to conjugate words that start with "qu".
Code: pigLatin: "quilt"
Expected Output: "quayilt"

Test: "It will move the first charater "ay" appended to end of string."
Code: pigLatin("bat");
Expected Output: "atbay"

Test: "It will apply the "ay" and move the consinent and vowels to the end of multiple words in a string"
Code: pigLatin("Me too")
Expected Output: "emay ootay"
