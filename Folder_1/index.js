let t1 = () => {
    let a = 1;
    let b = 10;

    const out1 = document.querySelector('out-1');
    let ran =  Math.floor(a + Math.random() * (b + 1 - a));
    console.log(ran, out1);
}

t1();