//Get data of entered the user

document.querySelector('.btn').addEventListener('click',
function () {
    const s = document.querySelector('.inp').value;
    document.querySelector('.out-1').innerHTML = 'Hello ' + s;
});