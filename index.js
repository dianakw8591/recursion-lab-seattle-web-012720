// Code your solution here!

function printString(str) {
  console.log(str[0])
  if (str.length > 1) {
    printString(str.slice(1))
  } else {
    return true
  }
}

function reverseString(str) {
  if (str.length > 1) {
    return str[str.length - 1] + reverseString(str.slice(0, str.length - 1))
  } else {
    return str[0]
  }
}

function isPalindrome(str) {
  if (str[0] !== str[str.length - 1]) {
    return false
  } else if (str.length > 2) {
    return isPalindrome(str.slice(1, str.length - 1))
  } else {
    return true
  }
}

function addUpTo(arr, i) {
  if (i > 0) {
    return arr[i] + addUpTo(arr, i-1)
  } else {
    return arr[i]
  }
}

function maxOf(arr, max = 0) {
  if (arr.length > 1) {
    if (max < arr[0]) {
      return maxOf(arr.slice(1), arr[0])
    } else {
      return maxOf(arr.slice(1), max)
    }
  } else {
    return max > arr[0] ? max : arr[0]
  }
}

function includesNumber(arr, num) {
  if (arr[0] === num) {
    return true
  } else if (arr.length === 0) {
    return false
  } else {
    return includesNumber(arr.slice(1), num)
  }
}