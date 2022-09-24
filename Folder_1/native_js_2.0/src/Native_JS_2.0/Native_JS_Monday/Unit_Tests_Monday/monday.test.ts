import {mult, splitWords, sum} from "../Test_Functions";
import {CityType} from "../JS_TS_Objects";


// tests for Test_Functions
// let a: number;
// let b: number;
// beforeEach(() => {
//     a = 1;
//     b = 2;
// })
// test('sum should be correct', () => {
//     //data
//     // const a = 1;
//     // const b = 1;
//
//     a = 100;
//     //action
//     const result = sum(a,b);
//
//     //expected result
//     expect(result).toBe(102);
// })
// test('mult should be correct', () => {
//     //data
//      a = 2;
//      b = 3;
//
//     //action
//     const result = mult(a,b);
//
//     //expected result
//     expect(result).toBe(6);
// })
// test('splitWords should be correct', () => {
//     //data
//     const sentence1 = 'Hello my friends!';
//     const sentence2 = 'JS - the best    of programing language.';
//
//
//     //action
//     const result1 = splitWords(sentence1);
//     const result2 = splitWords(sentence2);
//
//     //expected result
//     expect(result1.length).toBe(3);
//     expect(result1[0]).toBe('hello');
//     expect(result1[1]).toBe('my');
//     expect(result1[2]).toBe('friends');
//
//     expect(result2.length).toBe(6);
//     expect(result2[0]).toBe('js');
//     expect(result2[1]).toBe('the');
//     expect(result2[2]).toBe('best');
//     expect(result2[3]).toBe('of');
//     expect(result2[4]).toBe('programing');
//     expect(result2[5]).toBe('language');
// })

//tests for JS_TS_Objects

let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                buildedAt: 2012,
                repaid: false,
                address: {
                    number: 100,
                    street: {
                        title: 'White street'
                    }
                }
            },
            {
                buildedAt: 2010,
                repaid: true,
                address: {
                    number: 15,
                    street: {
                        title: 'Black street'
                    }
                }
            },
            {
                buildedAt: 2018,
                repaid: false,
                address: {
                    number: 19,
                    street: {
                        title: 'Red street'
                    }
                }
            },
        ],
        govermentBuildings: [
            {
                type: 'HOSPITAL',
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: 'Central Str'
                    }
                }
            },
            {
                type: 'FIRE-STATION',
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: 'South Str'
                    }
                }
            }
        ],
        citizensNumber: 10000
    }
})

test('test city should contains 3 houses', () => {
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].buildedAt).toBe(2012);
    expect(city.houses[0].repaid).toBe(false);
    expect(city.houses[0].address.number).toBe(100);
    expect(city.houses[0].address.street.title).toBe('White street');

    expect(city.houses[1].buildedAt).toBe(2010);
    expect(city.houses[1].repaid).toBe(true);
    expect(city.houses[1].address.number).toBe(15);
    expect(city.houses[1].address.street.title).toBe('Black street');

    expect(city.houses[2].buildedAt).toBe(2018);
    expect(city.houses[2].repaid).toBe(false);
    expect(city.houses[2].address.number).toBe(19);
    expect(city.houses[2].address.street.title).toBe('Red street');
})

test('test city should contains hospital and fire station', () => {
    expect(city.govermentBuildings.length).toBe(2);

    expect(city.govermentBuildings[0].type).toBe('HOSPITAL');
    expect(city.govermentBuildings[0].budget).toBe(200000);
    expect(city.govermentBuildings[0].staffCount).toBe(200);
    expect(city.govermentBuildings[0].address.street.title).toBe('Central Str');

    expect(city.govermentBuildings[1].type).toBe('FIRE-STATION');
    expect(city.govermentBuildings[1].budget).toBe(500000);
    expect(city.govermentBuildings[1].staffCount).toBe(1000);
    expect(city.govermentBuildings[1].address.street.title).toBe('South Str');
})



