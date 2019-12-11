/* eslint-disable strict */

// 5. URLify a string
function urlify(str) {
  let spaceIndexes = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      spaceIndexes.push(i);
    }
  }
  let newStr = '';
  let last = 0;
  for (let i = 0; i <= spaceIndexes.length; i++) {
    let add = str.slice(last, spaceIndexes[i]);
    if (i === spaceIndexes.length) {
      newStr += add;
    } else newStr += str.slice(last, spaceIndexes[i]) + '%20';
    last = spaceIndexes[i] + 1;
  }
  return newStr;
}

//console.log(urlify('a b c d'));

// 7. Max sum in the array

function maxSum(arr) {
  let max = Number.NEGATIVE_INFINITY;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}

//console.log(maxSum([4, 6, -3, 5, -2, 1]));

// 9. Remove characters

function removeChars(str, char) {
  let newStr = ' ';
  let last = 0;
  for (let i = 0; i <= str.length; i++) {
    if (char.includes(str[i]) || i === str.length) {
      newStr += str.slice(last, i);
      last = i + 1;
    }
  }
  return newStr;
}

//console.log(removeChars('Battle of the Vowels: Hawaii vs. Grozny', ['a', 'e', 'i', 'o', 'u']));

//11. 2D array

function setZero(arr) {
  let zeroes = new Array(arr.length);
  zeroes.fill(0, 0, arr.length);
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i].slice();
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] === 0) {
        newArr[i] = zeroes;
        for (let h = 0; h < newArr.length; h++) {
          newArr[h][j] = 0;
        }
      }
    }
  }

  return newArr;
}

let arr = setZero([[1, 0, 1, 1, 0], [0, 1, 1, 1, 0], [1, 1, 1, 1, 1], [1, 0, 1, 1, 1], [1, 1, 1, 1, 1]]);
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
