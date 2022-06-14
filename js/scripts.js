// function noVowel(str) {
//   let oldStr = str.trim();
//   let strArr = oldStr.split('');
//   console.log(strArr);
//   for (let x = 0; x < str.length; x++) {
//     let char = str[x].toLowerCase();
//     if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
//       strArr[x] = '-';
//     }
//   }
//   console.log(strArr.join(''));
// }
// const vowels = ['a','e','i','o','u'];

function vowelFinder(str) {
  let array1 = str.split();
  for (let i = 0; i < array1.length; i++) {
    let char = str[i];
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
      return true;
    } else {
      return false;
    }
  }
}

function consonantFinder(str) {
  let array1= str.split();
  for (let i = 0; i < array1.length; i++) {
    let char = str[i];
    if (char !== 'a' && char !== "e" && char !== "i" && char !== "o" && char !== "u") {
      return true;
    } else {
      return false;
    }
  }
}

function checkForQu(str) {
  let array1= str.split();
  for (let i = 0; i < array1.length; i++) {
    let char1 = str[i]; 
    let char2 = str[i+1];
    if (char1 === 'q' && char2 === "u" ) {
      return true;
    } else {
      return false;
    }
  }
}

function addWay(str) {
  let array1 = str + 'way';
  console.log(array1);
  }

function addAy(str) {
  let array1 = str + 'ay';
  console.log(array1);
  }


// function consonants(str) {
//   var countConsonants = 0;

//   for (var i = 0; i <= str.length; i++) {

//     if (str[i] !== "a" || str[i] !== "e" || str[i] !== "i" ||
//       str[i] !== "o" || str[i] !== "u" || str[i] !== " ") {
//       countConsonants += 1;
//     }
//   }
//   return (countConsonants);
// }
// consonants("asdfghaaa");