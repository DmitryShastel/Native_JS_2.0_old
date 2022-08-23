let inputIn = document.querySelector('#inp');
let button = document.querySelector('.btn');
let div = document.querySelector('#out-1');

button.onclick = function ()  {
    console.log('Hello!');
    // console.log(inputIn.value);
    let a = +inputIn.value;
    console.log(a + 10);
    div.innerHTML = a + 10;
    inputIn.value = '';
}