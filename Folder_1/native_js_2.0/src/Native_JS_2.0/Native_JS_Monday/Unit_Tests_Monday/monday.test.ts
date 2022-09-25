import {mult, splitWords, sum} from "../Test_Functions";
import {CityType, StudentType} from "../JS_TS_Objects";
import {addMoneyToBudget, addSkill, changeStatus, doesStudentLiveIn} from "../JS_TS_Functions";


//tests for Test_Functions
let a: number;
let b: number;
beforeEach(() => {
    a = 1;
    b = 2;
})
test.skip('sum should be correct', () => {
    //data
    // const a = 1;
    // const b = 1;

    a = 100;
    //action
    const result = sum(a,b);

    //expected result
    expect(result).toBe(102);
})
test.skip('mult should be correct', () => {
    //data
     a = 2;
     b = 3;

    //action
    const result = mult(a,b);

    //expected result
    expect(result).toBe(6);
})
test.skip('splitWords should be correct', () => {
    //data
    const sentence1 = 'Hello my friends!';
    const sentence2 = 'JS - the best    of programing language.';


    //action
    const result1 = splitWords(sentence1);
    const result2 = splitWords(sentence2);

    //expected result
    expect(result1.length).toBe(3);
    expect(result1[0]).toBe('hello');
    expect(result1[1]).toBe('my');
    expect(result1[2]).toBe('friends');

    expect(result2.length).toBe(6);
    expect(result2[0]).toBe('js');
    expect(result2[1]).toBe('the');
    expect(result2[2]).toBe('best');
    expect(result2[3]).toBe('of');
    expect(result2[4]).toBe('programing');
    expect(result2[5]).toBe('language');
})


//tests for JS_TS_Objects
let student: StudentType;
beforeEach(() => {
    student = {
        id: 1,
        name: "Dima",
        age: 31,
        isActive: false,
        address: {
            streetTitle: 'Gerasimenko',
            city: {
                title: 'Minsk',
                country: 'Belarus',
            }
        },
        technologies: [
            {id: 1, title: 'HTML'},
            {id: 2, title: 'JS'},
            {id: 3, title: 'React'},
        ]
    }
})
test.skip('new tech skill should be added to student', ()=> {
    expect(student.technologies.length).toBe(3);
    addSkill(student, 'JAVA');
    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe('JAVA');
})
test.skip('the student should be active', ()=>{
    expect(student.isActive).toBe(false);
    changeStatus(student, true);
    expect(student.isActive).toBe(true);

})
test.skip('does the student live in city', () => {
    let result1 = doesStudentLiveIn(student, 'Moscow')
    let result2 = doesStudentLiveIn(student, 'Minsk')
    expect(result1).toBe(false);
    expect(result2).toBe(true);
})

export let city: CityType;
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
test.skip('test city should contains 3 houses', () => {
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
test.skip('test city should contains hospital and fire station', () => {
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
test.skip('the objects students should be display correct', () => {
    expect(student.technologies.length).toBe(3);

    expect(student.id).toBe(1);
    expect(student.name).toBe('Dima');
    expect(student.age).toBe(31);
    expect(student.isActive).toBe(true);
    expect(student.address.streetTitle).toBe('Gerasimenko');
    expect(student.address.city.title).toBe('Minsk');
    expect(student.address.city.country).toBe('Belarus');
    expect(student.technologies[0].id).toBe(1);
    expect(student.technologies[0].title).toBe('HTML');
    expect(student.technologies[1].id).toBe(2);
    expect(student.technologies[1].title).toBe('JS');
    expect(student.technologies[2].id).toBe(3);
    expect(student.technologies[2].title).toBe('React');
})

test('Budget should be changed for HOSPITAL', () => {
    addMoneyToBudget(city.govermentBuildings[0], 100000);
    expect(city.govermentBuildings[0].budget).toBe(300000)
})

test('Budget should be changed for FIRE-STATION', () => {
    addMoneyToBudget(city.govermentBuildings[1], -100000);
    expect(city.govermentBuildings[1].budget).toBe(400000)
})







