let students = {
    id: 1,
    name: "Dima",
    age: 31,
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

console.log(students.technologies[2].title);
export {}