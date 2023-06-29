import {mult, splitWords, sum} from "../Test_Functions";
import {CityType, StudentType} from "../JS_TS_Objects";
import {
    addMoneyToBudget,
    addSkill,
    changeStatus, demolishHouseOnTheStreet,
    doesStudentLiveIn, getBuildingsWithStaffCountGreaterThen,
    repairHouse,
    toFireStaff, toHireStaff
} from "../JS_TS_Functions";
import {ManType} from "../JS_TS_Destructuring";
import {userObj} from "../script";



let props: ManType;

beforeEach(() => {
    props = {
        name: 'Dimych',
        age: 32,
        lessons: [{title: '1'}, {title:'2'}]
    }
})

test('1', () => {
    // const age = props.age
    // const lessons = props.lessons
    const{age, lessons} = props

    const a = props.age
    const l = props.lessons

    expect(age).toBe(32)
    expect(lessons.length).toBe(2)

    expect(a).toBe(32)
    expect(l.length).toBe(2)
})
// test('1', () => {
//     // const age = props.age
//     // const lessons = props.lessons
//     const{age, lessons} = props
//
//     const a = props.age
//     const l = props.lessons
//
//     expect(age).toBe(32)
//     expect(lessons.length).toBe(2)
//
//     expect(a).toBe(32)
//     expect(l.length).toBe(2)
// })
// test('1', () => {
//     // const age = props.age
//     // const lessons = props.lessons
//     const{age, lessons} = props
//
//     const a = props.age
//     const l = props.lessons
//
//     expect(age).toBe(32)
//     expect(lessons.length).toBe(2)
//
//     expect(a).toBe(32)
//     expect(l.length).toBe(2)
// })



test ('2', ()=>{
    const l1 = props.lessons[0];
    const l2 = props.lessons[1];

    const [ls1, ls2] = props.lessons

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    expect(ls1.title).toBe('1')
    expect(ls2.title).toBe('2')

})





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
    const result = sum(a, b);

    //expected result
    expect(result).toBe(102);
})
test.skip('mult should be correct', () => {
    //data
    a = 2;
    b = 3;

    //action
    const result = mult(a, b);

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
test.skip('new tech skill should be added to student', () => {
    expect(student.technologies.length).toBe(3);
    addSkill(student, 'JAVA');
    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe('JAVA');
})
test.skip('the student should be active', () => {
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
                id: 1,
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
                id: 2,
                buildedAt: 2010,
                repaid: false,
                address: {
                    number: 15,
                    street: {
                        title: 'Black street'
                    }
                }
            },
            {
                id: 3,
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
test.skip('Budget should be changed for HOSPITAL', () => {
    addMoneyToBudget(city.govermentBuildings[0], 100000);
    expect(city.govermentBuildings[0].budget).toBe(300000)
})
test.skip('Budget should be changed for FIRE-STATION', () => {
    addMoneyToBudget(city.govermentBuildings[1], -100000);
    expect(city.govermentBuildings[1].budget).toBe(400000)
})
test.skip('Houses should be destroyed', () => {

    demolishHouseOnTheStreet(city, 'White street')

    expect(city.houses.length).toBe(2)
    expect(city.houses[0].id).toBe(2)
})
test.skip('buildings with correct staff count', () =>{
    let buildings = getBuildingsWithStaffCountGreaterThen(city.govermentBuildings, 500)

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe('FIRE-STATION')
})


//rewrite
// test.skip('Houses should be destroyed', () => {
//     demolishHousesOnTheStreet(city, 'Happy street');
//     expect(city.houses.length).toBe(1);
//     expect(city.houses[0].id).toBe(1);
// })
test.skip('House should be repared', () => {
    repairHouse(city.houses[1]);
    expect(city.houses[1].repaid).toBe(true);
})
test.skip('Staff should be increased', () => {
    toFireStaff(city.govermentBuildings[0], 20);
    expect(city.govermentBuildings[0].staffCount).toBe(180);
})
test.skip('House should be repared2', () => {
    toHireStaff(city.govermentBuildings[0], 20);
    expect(city.govermentBuildings[0].staffCount).toBe(220);
})
//Array filter
test.skip('should be age more than 90', () => {
    //data
    const ages = [18, 20, 22, 1, 100, 90, 14];
    //action
    const oldAges = ages.filter(e => {
        return e > 90
    })

    //expected result
    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})
test.skip('courses should be cheaper than 160', () => {
    const courses = [
        {title: 'CSS', price: 110},
        {title: 'JS', price: 200},
        {title: 'React', price: 150},
    ]

    let expensiveCourses = courses.filter((e) => {
        return e.price < 160
    })
    expect(expensiveCourses.length).toBe(2)
    expect(expensiveCourses[0].price).toBe(110)
    expect(expensiveCourses[0].title).toBe('CSS')
    expect(expensiveCourses[1].price).toBe(150)
    expect(expensiveCourses[1].title).toBe('React')
})
test.skip('get only completed tasks', ()=> {
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Solt', isDone: false},
        {id: 4, title: 'Sugar', isDone: true},
    ]

    const completedTasks = tasks.filter(e => e.isDone === true)
    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].title).toBe('Milk')
    expect(completedTasks[0].id).toBe(2)
    expect(completedTasks[1].title).toBe('Sugar')
    expect(completedTasks[1].id).toBe(4)
})

test('should select corresponding user from obj', () => {
    expect(userObj[0]).toBe('Dima1');
    expect(userObj[1]).toBe('Dima2');
    expect(userObj[2]).toBe('Dima3');
    expect(userObj[3]).toBe('Dima4');
})







