let exampleArray = [
'1abc2',
'pqr3stu8vwx',
'a1b2c3d4e5f',
'treb7uchet'
];

function separate(arr) {
  let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let extracted = [];
  let firstAndLast = [];
  let sum = 0;

  arr.forEach((str) => {

    for (let i = 0; i < str.length; i ++) {
      let letter = str.charAt(i);

      if ( nums.includes(Number(letter))) {
        extracted.push(Number(letter));
      }
    }

    firstAndLast[0] = extracted[0];
    firstAndLast[1] = extracted[extracted.length - 1];
    if (firstAndLast[0] || firstAndLast[1] === '') {
      console.log('empty')
    }
    sum += Number(form(firstAndLast)[0]);
    extracted = [];
  })

  console.log(sum);
  return sum;
}
separate(exampleArray);


function form(arr) {
  craftedArr = [];
  let formed = String(arr[0]) + String(arr[1]);
  craftedArr.push(formed);
  return craftedArr
}

const p = document.querySelector('p');

const rawInput = p.textContent;
let stringArray = rawInput.split('\n');

// clear empty array elements
stringArray.pop();
stringArray.shift();

// separate(stringArray);