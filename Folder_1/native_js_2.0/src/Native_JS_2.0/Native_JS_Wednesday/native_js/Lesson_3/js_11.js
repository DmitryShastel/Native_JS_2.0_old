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
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const response = {
                    request: {},
                    status: 200,
                    headers: {},
                    data: [],
                };
                resolve(response)
            })
        })
    }
}

const promise1 = axios.get('test_url')
    .then((data) => {
        return data
    })

const findUserInDB = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = [
                {id: 1, name: 'Bob'},
                {id: 2, name: 'Anna'},
            ];
            const filteredUser = users.filter((el) => el.id === id);
            if (filteredUser.length > 0) {
                resolve(filteredUser[0]);
            } else {
                reject(new Error('User not found'))
            }
            return filteredUser
        })
    })
}

const promise2 = findUserInDB(2)
    .then((userData) => {
        return userData
    })
    .catch(() => {

    })


const otherPromise = Promise.all([promise1, promise2])

otherPromise
    .then((result) => {
        console.log(result)
    })
    .catch(() => {
        console.log('initialization failed. Try later')
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