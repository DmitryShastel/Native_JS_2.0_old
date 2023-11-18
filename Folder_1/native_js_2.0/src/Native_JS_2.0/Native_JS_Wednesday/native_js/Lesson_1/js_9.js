// let superSum = (num) => {
//     if (num === 0) return 0;
//     if (num === 1) return (n) => n
//
//     let _arguments = [];
//
//     function helper(...args) {
//         _arguments = [..._arguments, ...args];
//         if(_arguments.length >= num) {
//             _arguments.length = num
//             return _arguments.reduce((acc, number) => acc + number)
//         } else {
//             return helper
//         }
//     }
//     return helper
// }
//
// console.log(superSum(3)(2)(5)(3))
// console.log(superSum(3)(2)(5,3))
// console.log(superSum(3)(2,5,3))
// console.log(superSum(3)(2)(5)(3))
// console.log(superSum(3)(2,5)(3))
// console.log(superSum(3)(2,5)(3,9))