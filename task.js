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
// friendFind(friends);

// console.log(newFriends);

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