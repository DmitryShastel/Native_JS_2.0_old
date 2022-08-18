let obj = {
    name: 'Ivan',
    age: 30,
    hello() {
        console.log('My name is ' + this.name + ' I am ' + this.age);
 }
}
// obj.hello();

obj.hello();