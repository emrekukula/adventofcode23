let exampleArray = [
  'two1nine',  // 2 9
  'eightwothree', // 8 3
  'abcone2threexyz', // 1 3
  'xtwone3four', // 2 4
  '4nineeightseven2', // 4 2
  'zoneight234', // 1 4
  '7pqrstsixteen', // 7  6
  ];

  
  function separate(arr) {
    let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let longNums = ['zero', 'one', 'two', 'three', 'four', 'five',
                    'six', 'seven', 'eight', 'nine']
    let extracted = [];
    let firstAndLast = [];
    let sum = 0;
    let newString = '';

    let reversedNums = longNums.map(element => {
      return element.split('').reverse().join('');
    })
    
    arr.forEach((str) => {
      console.log(str);
      
      function findFirst(str) {
        for ( let i = 0; i < str.length; i++) {
          newString += str.charAt(i);
          // console.log(newString)
          for (let j = 0; j < nums.length; j++) {
            if (newString.includes(nums[j])) {
              extracted.push(nums[j]);
              console.log(extracted);
              newString = '';
              break;

            }  else if (newString.includes(longNums[j])) {
              extracted.push(nums[j]);
              console.log(extracted);
              newString = '';
              break;
            }
          }
          if (extracted.length >= 1) {
            firstAndLast[0] = extracted[0];
            extracted = [];
            break;
          }
        }
        newString = '';
      }
      findFirst(str);

      function findLast(str) {

        // last to first loop
        for ( let i = str.length; i > 0; i--) {
          newString += str.charAt(i);
          // console.log(newString)
          for (let j = 0; j < nums.length; j++) {
            if (newString.includes(nums[j])) {
              extracted.push(nums[j]);
              console.log(extracted);
              newString = '';
              break;

            }  else if (newString.includes(reversedNums[j])) {
              extracted.push(nums[j]);
              console.log(extracted);
              newString = '';
              break;
            }
          }
          if (extracted.length >= 1) {
            firstAndLast[1] = extracted[0];
            extracted = [];
            break;
          }
        }
        newString = '';
      }
      findLast(str);

      let strNum = form(firstAndLast);
      sum += Number(strNum[0])
      console.log(firstAndLast)
    })

    console.log(sum);
    return sum;
  }
  separate(exampleArray);
  
  function form(arr) {
    craftedArr = [];
    let formed = String(arr[0]) + String(arr[1]);
    craftedArr.push(formed);
    console.log(craftedArr)
    return craftedArr
  }
  
  const p = document.querySelector('p');
  
  const rawInput = p.textContent;
  let stringArray = rawInput.split('\n');
  
  // clear empty array elements
  stringArray.pop();
  stringArray.shift();

  console.log({stringArray})
  separate(stringArray); // should be 54418


  