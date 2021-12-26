/*
Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.

Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

Constraints:
Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:

Examples:
constructNote('aa', 'abc') // false
constructNote('abc', 'dcba') // true
constructNote('aabbcc', 'bcabcaddff') // true
*/
/*
1. Understand the problem
  - function should accepts two strings. If the first string build from the second string, return true else return false
  - there are only lowercase letters and no space or special characters in both strings.
2. Explore concret examples
  - constructNote('aa', 'abc') // false
  - constructNote('abc', 'dcba') // true
  - constructNote('aabbcc', 'bcabcaddff') // true
3. Break it down
  approach #1:
    - use nested loop
  approach #2:
    - check if each string length is zero. If strings length equals to zero, return false.
    - declare object called lookup which stores frewuency of letter in letters string.
    - loop over the every letter of the message.
    - check if the letter exists in the lookup object. Return false if the letter is not in lookup obj.
    - return true, if the loop ends without break.
    */
// 4. Solve and simplify
export function constructNote(message: string, letters: string): boolean {
  if (!message && !letters) return false;
  if (message.length === 0 && letters.length === 0) return false;

  let lookup: {
    [index: string]: number;
  } = {};

  for (let letter of letters) {
    lookup[letter] = (lookup[letter] | 0) + 1;
  }

  for (let val of message) {
    if (!lookup[val]) {
      return false;
    }
  }

  return true;
}
