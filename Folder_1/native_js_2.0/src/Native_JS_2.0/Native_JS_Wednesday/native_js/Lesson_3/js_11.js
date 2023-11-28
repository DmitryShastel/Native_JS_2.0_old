const server = {
    getData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                //resolve();
                reject();
            }, 2000)
        })
    }
}

const promise = server.getData();
console.log(promise);