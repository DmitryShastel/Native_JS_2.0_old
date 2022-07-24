let login = prompt("Fill in your login");

if (login === 'admin'){
    let password = prompt('Enter your password');
    
    if (password === 'passw0rd'){
        alert('You are logged');
    } else if (password === '' || password === null){
            alert('Canceled');
    } else{
        alert('Your password is wrong');
    }
} else if (login === '' || login === null){
    alert('Canceled');
} else {
    alert('Your login is wrong');
}


















