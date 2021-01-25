// TASK 1
// Create a function which should change age to 34, and delete married property. In the end console.log object.

var person = {
    name: "Mike",
    age: 28,
    married: true
}

function changeAgeAndStatus(user) {
    user.age = 34;
    delete user.married;
    console.log(user);
}

changeAgeAndStatus(person);

// TASK 2
// Create a function which should check if person has children property, if not add it. 
// Its value should be array containing two objects with children data. Each object should contain child name, age and gender.

var person = {
    name: "Mike",
    age: 28,
    married: true
}
var personWithChildren = checkIfThereIsChildren(person);

function checkIfThereIsChildren(user) {
    if (!user.children) {
        user.children = [{
                name: 'Michael',
                age: 12,
                gender: 'male'
            },
            {
                name: 'Dejan',
                age: 14,
                gender: 'male'
            }
        ]
    }
    return user;
}

console.log(personWithChildren);

// TASK 3
// Create a function which should console.log if student passed exam, result should be something like:
//"Jack passed exam" or "Mike didn't pass exam"

var students = [{
        name: 'Mike',
        age: 28,
        passed: false
    },
    {
        name: 'Anna',
        age: 23,
        passed: true
    },
    {
        name: 'Jack',
        age: 32,
        passed: true
    },
];

function checkIfStudentPassExam(array) {
    for (var i = 0; i < array.length; i++) {
        array[i].passed ? console.log(array[i].name + ' passed the exam') : console.log(array[i].name + " didn't pass exam")
    }
}

checkIfStudentPassExam(students);

// TASK 4
// Create a function which should repack existing data into three arrays, names, ages, and passed. Example of names array:
// var names = ['Mike', 'Anna', 'Jack'];

var students = [{
        name: 'Mike',
        age: 28,
        passed: false
    },
    {
        name: 'Anna',
        age: 23,
        passed: true
    },
    {
        name: 'Jack',
        age: 32,
        passed: true
    },
];

function repackArray(array) {
    window.names = [];
    window.ages = [];
    window.passed = [];
    for (var i = 0; i < array.length; i++) {
        window.names[i] = array[i].name;
        window.ages[i] = array[i].age;
        window.passed[i] = array[i].passed;
    }
    console.log(window.names);
}

repackArray(students);


// TASK Home Work
// Create a new array  with objects from existing object;

var players = [['Ronaldo', 70, 400], ['Messi', 55, 387], ['Ibrahimovic', 55, 1000]];

var playersInfo = repackPlayers(players);

function repackPlayers(array) {
    playersRepack = [];
    for (var i = 0; i < array.length; i++) {
        var player = array[i];
        playersRepack[i] = {
            name: player[0],
            goals : player[1],
            games: player[2]
        };
    }
    return playersRepack;
}

console.log(playersInfo);

  



