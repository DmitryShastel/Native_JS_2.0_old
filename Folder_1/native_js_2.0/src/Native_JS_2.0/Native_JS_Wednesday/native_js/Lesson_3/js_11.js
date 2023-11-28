const server = {
    getData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // resolve('some data');
                reject('some error');
            }, 2000)
        })
    }
}

// const promise = server.getData();
// console.log(promise);

server.getData()
    .then((data) => {
        console.log('then1', data);
        return 10
    })
    .then((data) => {
        console.log('then2', data);
    })
    .catch((error) => {
        console.log('cath1', error)
    })
    .then((data) => {
        console.log('then3', data);
    })