// question 1: Write a JavaScript function that generates all combinations of a string( example : 'dog' → d,do,dog,o,og,g)
//function for question 1
// it use recurtion for genrate all combination of given string
const list = document.querySelector(".ans1");
function generateCombinations(input) {
  function combination(str, index, currentCombination, result) {
    if (index === str.length) {
      if (currentCombination !== "") {
        result.push(currentCombination);
      }
      return;
    }
    combination(str, index + 1, currentCombination + str[index], result);
    combination(str, index + 1, currentCombination, result);
  }
  const result = [];
  combination(input, 0, "", result);
  const uniqueresult = [...new Set(result)];
  return uniqueresult;
}
//function for showing output on html page
document.querySelector(".generate1").addEventListener("click", function () {
  list.innerHTML = "";
  const que1 = document.getElementById("inputque1").value;
  var orderedList = document.createElement("ol");
  const result1 = generateCombinations(que1);
  result1.forEach((ans) => {
    var listItem = document.createElement("li");
    listItem.textContent = ans;
    orderedList.appendChild(listItem);
  });
  list.appendChild(orderedList);
});
document.querySelector(".reset1").addEventListener("click", () => {
  list.innerHTML = "";
  document.getElementById("inputque1").value = "";
});
//question 2
//Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.(example: 'Web Development Tutorial' → 'Development')
//function for question
function longestword(str) {
  const words = str.split(" ");
  var longword = "";
  words.forEach((word) => {
    if (word.length >= longword.length) {
      longword = word;
    }
  });
  return longword;
}
//function for show anser
const ans2 = document.querySelector(".ans2");
document.querySelector(".generate2").addEventListener("click", function () {
  ans2.innerHTML = "";
  const que2 = document.getElementById("inputque2").value;
  var output = document.createElement("p");
  output.innerHTML = `Longest Word: ${longestword(que2)}`;
  ans2.appendChild(output);
});
//function for reset
document.querySelector(".reset2").addEventListener("click", () => {
  ans2.innerHTML = "";
  document.getElementById("inputque2").value = "";
});
//question 3
//Write a JavaScript function to compute the factors of a positive integer.(example : factor(15) → [1,3,5,15])
//function for question 3
function factors(val) {
  var ans3 = [];
  for (let i = 1; i <= Math.floor(val / 2); i++) {
    if (val % i === 0) {
      ans3.push(i);
    }
  }
  ans3.push(val);
  return ans3;
}

const ans3 = document.querySelector(".ans3");
document.querySelector(".generate3").addEventListener("click", function () {
  ans3.innerHTML = "";
  const que3 = document.getElementById("inputque3").value;
  var orderedList = document.createElement("ul");
  const result3 = factors(que3);
  result3.forEach((ans) => {
    var listItem = document.createElement("li");
    listItem.textContent = ans;
    orderedList.appendChild(listItem);
  });
  ans3.appendChild(orderedList);
});
document.querySelector(".reset3").addEventListener("click", () => {
  ans3.innerHTML = "";
  document.getElementById("inputque3").value = "";
});
//question 4
//Write a JavaScript function to find the first not repeated character.(example: 'abacddbec' → ‘e’)
function fistnotrepeated(str) {
  const charCount = {};
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }
  return null;
}
const ans4 = document.querySelector(".ans4");
document.querySelector(".generate4").addEventListener("click", function () {
  ans4.innerHTML = "";
  const que4 = document.getElementById("inputque4").value;
  var output = document.createElement("p");
  output.innerHTML = `first not repeated character: ${fistnotrepeated(que4)}`;
  ans4.appendChild(output);
});
//function for reset
document.querySelector(".reset4").addEventListener("click", () => {
  ans4.innerHTML = "";
  document.getElementById("inputque4").value = "";
});

//question 5
//Write a JavaScript function to get all possible subsets with a fixed length (for example 2) combinations in an array.(example: [1, 2, 3] and subset length is 2 →  [[2, 1], [3, 1], [3, 2], [3, 2, 1]])
function getSubsetsWithFixedLength(arr, length) {
  const result = [];

  function generateSubsets(startIndex, currentSubset) {
    if (currentSubset.length === length) {
      result.push([...currentSubset]);
      return;
    }

    for (let i = startIndex; i < arr.length; i++) {
      currentSubset.push(arr[i]);
      generateSubsets(i + 1, currentSubset);
      currentSubset.pop();
    }
  }

  generateSubsets(0, []);

  return result;
}

// Example usage
const array = [1, 2, 3];
const subsetLength = 2;
const subsets = getSubsetsWithFixedLength(array, subsetLength);

//question 6
//Write a JavaScript function that reverses a number (example: 32243 → 34223)
function reverseNumber(num) {
  const numString = num.toString();
  const reversedString = numString.split("").reverse().join("");
  const reversedNumber = parseInt(reversedString, 10);
  return reversedNumber;
}

//function for question 6
const ans6 = document.querySelector(".ans6");
document.querySelector(".generate6").addEventListener("click", function () {
  ans6.innerHTML = "";
  const que6 = document.getElementById("inputque6").value;
  var output = document.createElement("p");
  output.innerHTML = `first not repeated character: ${reverseNumber(que6)}`;
  ans6.appendChild(output);
});
//function for reset
document.querySelector(".reset6").addEventListener("click", () => {
  ans6.innerHTML = "";
  document.getElementById("inputque6").value = "";
});
