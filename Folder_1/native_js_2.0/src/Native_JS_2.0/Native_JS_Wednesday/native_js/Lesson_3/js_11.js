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
                    vacancies: [
                        {id: 1, title: 'js'},
                        {id: 2, title: 'css'},
            ],
                    status: 200,
                    headers: {},
                    data: [],
                };

                // const response = [{title: 'hello'},{},{}]
                resolve(response)
            })
        })
    }
}

const promise1 = axios.get('test_url')
    .then((data) => {
        return  data
        // return  console.log(data)
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

const promise2 = findUserInDB(1)
    .then((userData) => {
        return userData
    })
    .catch(() => {
    })


const otherPromise = Promise.all([promise1, promise2])

otherPromise
    .then((results) => {
        const dataFromServer = results[0];
        const userFromDB = results[1];
        //console.log(userFromDB.name)
        console.log(dataFromServer.vacancies[0].title + '; ' + userFromDB.name)
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