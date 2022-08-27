//Напишите функцию, которая разворачивает массив в обратном порядке

let arr = [1, 2, 3, 4, 5];

let reverse = (arr) => {
  
    let reversed = [];

    for (let i = arr.length - 1; i >= 0; i--){
        reversed.push(arr[i]);
    } 
    return  console.log(reversed);
}

reverse(arr);