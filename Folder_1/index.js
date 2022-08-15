let getRandomInt = () => {
    let min = 117;
    let max = 132;
    let ram = Math.floor(Math.random() * (max -min + 1)) + min;
    console.log(ram)
}

getRandomInt();