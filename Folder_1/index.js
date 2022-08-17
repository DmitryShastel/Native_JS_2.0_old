//Calculate the user age

document.querySelector('.btn').addEventListener('click',
function () {
    const year = +document.querySelector('.inp').value;
    if(isNaN(year)) return;
    if(year <= 0 || year > 140) return;
    document.querySelector('.out-1').innerHTML = 2022 - year;
    console.log(year)
});

// let clearText = (data) => {
//     return data.trim().toLowerCase();
// }