//Вывести количество четных/нечетных чисел из числа n

let num = () => {
   
    let a = document.getElementById('inp').value;
    let count1 = 0;
    let count2 = 0;

    for (let i = 0; i < a.length; i++) {
        if(a[i] % 2 == 0){ 
            count1++;
        } else 
            count2++;
        return console.log([count1, count2]);
    } 
}

let b = num()