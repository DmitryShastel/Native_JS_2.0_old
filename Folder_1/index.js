let fruit = document.querySelector('#inp');


let result = () => {
    let a = fruit.value;
    let bag = {
        [a]: 5,
    }
    fruit.value = '';
    console.log(bag);
}

