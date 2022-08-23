//Проверить является ли строка палиндромом 

let palindrome = () => {
  
    let str = document.getElementById('inp').value.toLowerCase();

    return console.log(str.split('').reverse().join('') == str);
    
}



// let palindrome = () => {
//     let str = document.getElementById('inp').value.toLowerCase();
//     let str2 = str.split('');
//     str2 = str2.reverse();
//     str2 = str2.join('');
//     if(str == str2) return console.log(true);
//     else return console.log(false);

// }