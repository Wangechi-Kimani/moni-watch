// // const numbers = [1, -2, -3, 5];
// const numbers = [1, 2, 0, -5];

// function solution(A) {
//     const reducer = (prevElement, currentElement) => prevElement * currentElement;
//     // console.log(numbers.reduce(reducer))
//     if(A.reduce(reducer) < 0) {
//         return -1;
//         // console.log('-1')
//     } else if(A.reduce(reducer) > 0) {
//         // console.log('1');
//         return 1;
//     } else if(A.reduce(reducer) === 0) {
//         return 0;
//         // console.log('0')
//     } else {
//         return;
//     }
// }

// const result = solution(numbers);
// console.log(result);

// const string = 'id name age score NULL 12 17 Betty 28 11';
const string = 'id,name,age,score\n1,NULL,12\n17,Betty,28,11';

function solution(A){
    const regexNewLine = /\n1/g;
    const newStr = A.replace(regexNewLine, '');
    const regexNULL = /NULL,/g;
    const updatedStr = newStr.replace(regexNULL, '');
    return updatedStr;  
}

const result = solution(string);
console.log(result);

