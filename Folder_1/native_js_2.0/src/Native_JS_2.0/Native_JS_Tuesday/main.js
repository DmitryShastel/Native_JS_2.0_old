//1 this method is sorting out of the box without additional parameters

const str1 = ['Bob', 'Alex', 'John']
console.log(str1.sort()) //['Alex', 'Bob', 'John']

//2 it's sorts type strings alphabetically

const str2 = ['Bob', 'Alex', 'John', 'john', '123', 'игорь', 'Юрий']
console.log(str2.sort()) //['123', 'Alex', 'Bob', 'John', 'john', 'Юрий', 'игорь']