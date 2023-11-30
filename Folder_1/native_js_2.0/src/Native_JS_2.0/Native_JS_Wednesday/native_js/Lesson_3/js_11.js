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

const axios = {
    get(url) {
        return new Promise ((resolve, reject) => {
            setTimeout(()=> {
                const response = {
                    request: {},
                    status: 200,
                    headers: {},
                    data: [],
                };
                resolve(response)
            })
        }, 2000)
    }
}

const promise1 = axios.get('test_url')
promise1.then((data) => {
    console.log(data)
})


// const promise = server.getData();
// console.log(promise);

// server.getData()
//     .then((data) => {
//         console.log('then1', data);
//         return 10
//     })
//     .then((data) => {
//         console.log('then2', data);
//     })
//     .catch((error) => {
//         console.log('cath1', error)
//     })
//     .then((data) => {
//         console.log('then3', data);
//     })
// .finally(() => {
//     console.log('finally')
// })