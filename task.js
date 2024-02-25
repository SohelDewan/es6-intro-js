const friends = ['Jodu', 'Modhu','Kodu', 'Jamil', 'kamil'];
const newFriends = [];

const friendFind = (num)=>{
    for(let arr of friends){
        // console.log(arr);
        if(arr.length % 2 == 0){
            newFriends.push(arr);
        }
    }
    return newFriends;
}

const elements = [2, 3, 4, 5, 6, 7, 8, 9];
const squareArr = [];

const square = (elements)=>{
    for(let i of elements){
        // console.log(length);
        const square = i * i;
        squareArr.push(square);
    }
    // const length = squareArr.length;
    console.log(squareArr);
     const sum = squareArr.reduce((p,c)=>p+c,0);
     console.log(sum);
    const avg = sum / squareArr.length;
    console.log(avg);
    return avg;
}
square(elements);
// arrow functions will take two arrays inputs and return max
const newArr = [12, 34, 43, 21, 9, 13];
// const twoArr = [...elements, ...newArr];
// console.log(twoArr);

const combinedArrMax = (arr1, arr2) => {
    const newArr = [...arr1, ...arr2];
    const max = Math.max(...newArr);
    return max;
};
// console.log(combinedArrMax(elements, newArr));
// How to make even numbers by mapping?
const oddArray = [1, 3, 5, 7, 9,];
const evenArray = oddArray.map(number => number+1);
// console.log(evenArray);
const givenArray = [30, 50, 79, 79, 90, 101, 30];


const divisibleByTen = array =>{
    return array.filter(array => array%10 === 0);
}
const expectedArray = divisibleByTen(givenArray); 
console.log(expectedArray);
