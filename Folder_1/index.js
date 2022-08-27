let inputIn = document.querySelector('#inp');
let arr = [];

let fill = () => {
    arr.push(inputIn.value);  
    console.log(arr);
    inputIn.value = '';
}