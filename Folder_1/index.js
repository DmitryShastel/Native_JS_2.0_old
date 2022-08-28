//Write a method that returns a duplicate-free array
let arr = [1, 2, 3, 1, 2, 3];

let unique = (arr) => {
    let result = [];
    for(let str of arr){
        if (!result.includes(str)) {
            result.push(str);
        }
    }
    return console.log(result);
}

unique(arr);