
function addToZero(nums) {
    const numsSet = new Set(nums);
    for (const num of nums) {
      if (numsSet.has(-num)) {
        return true;
      }
    }
    return false;
  }
//space complexity is O(n)
console.log(addToZero([3, 5, 6]))
console.log(addToZero([5, 6, 9, 10, -6]))



function hasUniqueChars(word) {
    const charArray = word.split('');
    for (let i = 0; i < charArray.length; i++) {
      for (let j = i + 1; j < charArray.length; j++) {
        if (charArray[i] === charArray[j]) {
          return false;
        }
      }
    }
    return true;
  }
// space complexity is O(n)
console.log(hasUniqueChars("Moonday"))
console.log(hasUniqueChars("Monday"))



function isPangram(sentence) {
    sentence = sentence.toLowerCase();
    for (let i = 97; i <= 122; i++) {
      if (!sentence.includes(String.fromCharCode(i))) {
        return false;
      }
    }
    return true;
  }

//   space complexity is O(1)
  console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
  console.log(isPangram("I like cats, but not mice"))



function findLongestWord(words) {
    let maxLength = 0;
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (word.length > maxLength) {
        maxLength = word.length;
      }
    }
    return maxLength;
  }

// space complexity is O(1)
console.log(findLongestWord(["hi", "hello"]))
console.log(findLongestWord(["cat", "dog", "monkey"]))
console.log(findLongestWord(["strawberry", "banana", "cherry", "peach"]))
  
  
  