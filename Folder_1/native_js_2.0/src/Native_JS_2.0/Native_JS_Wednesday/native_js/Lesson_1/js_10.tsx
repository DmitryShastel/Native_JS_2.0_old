// import React from 'react';
//
//
// export const Js10 = () => {
//
//     // type funType = {
//     //     id: string
//     //     title: string
//     //     isDone: boolean
//     // }
//     //
//     // const identity = <funType, >(value: funType[]): funType[] => {
//     //     return (value)
//     // }
//
//     // console.log(identity<funType>([{id: '123', title: "test", isDone: true}]), typeof identity([1, 2]))
//
//     // type DataType = number[]
//     //
//     // let numbers: DataType = [1, 2, 3]
//     //
//     // let reverseArray = <DataType, >(value: DataType[]): DataType[] => {
//     //     return value.reverse()
//     // }
//     // console.log(reverseArray(numbers))
//
//
//     // type DataType = Array<any> | string
//     //
//     // let getLength = <T extends DataType >(data: T): number => {
//     //     return data ? data.length : 0
//     // }
//     //
//     // console.log(getLength([1, 2, 3, {}]))
//     // console.log(getLength('abc'))
//
//
//     // type DataTypeArr1 = Array<number>
//     // type DataTypeArr2 = Array<string>
//     // type DataType = DataTypeArr1 | DataTypeArr2
//     //
//     // let mergeArrays = <T extends DataType>(data1: T, data2: T): DataType => {
//     //     let result: DataType = data1.concat(data2)
//     //     return result
//     // }
//     //
//     // console.log(mergeArrays([1], ['1', '2']))
//
//     // type DataTypeArr1 = Array<number>;
//     // type DataTypeArr2 = Array<string>;
//     // type DataType = DataTypeArr1 | DataTypeArr2;
//     //
//     // let mergeArrays = <T extends DataType>(data1: T, data2: T): DataType => {
//     //     let result: DataType = [...data1, ...data2] as DataType;
//     //     return result;
//     // };
//     // console.log(mergeArrays([1], ['1', '2'])); // [1, "1", "2"]
//
//
//     type DataType = number[]
//     let numbers = [1, 5, 6, 8, 10, 3]
//
//     let getMaxValue = <T extends DataType> (data: T): number => {
//         // return Math.max(...data)
//
//         //let result: any = data.reduce((el, acc) => el < acc ? acc : el)
//
//         let result = data[0];
//         for(let i = 1; i < data.length; i ++){
//             let current = data[i]
//             if(result < current){
//                 result = current
//             }
//         }
//         return result
//     }
//
//     console.log(getMaxValue(numbers))
//
//
//     return (
//         <div>
//             <h1>hello</h1>
//         </div>
//     );
// };
//
