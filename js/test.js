//object literal 
// [] = array
// {} = object
const person= {
    name: "Colin", 
    age: 30,
    student: true,
    birthday:function(){
        return new Date().getFullYear()-this.age;
    }
}

console.log(person.birthday());

//object constructor

class Task{
    constructor(name,priority){
        this.name=name;
        this.priority=priority;
    }
}

const task1 = new Task("Homework","High");
const task2 = new Task("Play Zelda", "High");
const task3 = new Task("Running", "Medium");

console.log(task1);
console.log(task2);
console.log(task3);

const client = {
    name:"Alex",
    type:"Premium",
    data:{
        address:{
            city:"TJ",
            country:"Mexico"
        },
        account:{
            user:"alex@gmail.com",
            password:"123Alex@"
        }
    },
    hobbies:{
        music:['rock','trance','electronic','hip hop']
    }
}
console.log(client.data.account.user);

//old way
const userName = client.data.account.user;
const userType = client.type;

console.log(userName);
console.log(userType);

//object structuring

let {name,type}= client;
console.log(name,type);
let{data:{address:{city,country}}}=client;
console.log(city,country);

//destructuring the account
let {data:{account}}=client;
console.log(account);

let {hobbies:{music}}=client;
console.log(music[2]);


const band="Metallica", genre="Heavy Metal", song="Enter Sandman";
const metallica={band,genre,song};
console.log(metallica)

const students= [
    {name: "John", age:30},
    {name: "Paul", age:26},
    {name: "Andrew", age:34},
    {name: "Andrea", age:39},
    {name:"Trevor", age:21},
    {name:"Juliet", age:19}
]

console.log(students);

// get students older than 25 years old
//look up filter function
const olders = students.filter(s=>s.age>25);
console.log(olders);

// find Andrea
const andrea = students.find(s=>s.name==="Andrea");
console.log(andrea);
// calculate average age

let total = students.reduce((totalAge,s)=>{
    return totalAge+s.age;

},0);

console.log(total/students.length);

//objects literal

var lion = {
    name: "Simba",
    foodType: "Carnivore",
    kingOfTheJungle: true
}

console.log(lion);

var monkey = {
    name: "Rafiki",
    foodType: "Carnivore",
    kingOfTheJungle: false
}

console.log(monkey);

//object constructor (new)
class Animal {
    constructor(name, foodType, kingOfTheJungle) {
        this.name = name;
        this.foodType = foodType;
        this.kinfOfTheJungle = kingOfTheJungle;
    }
}

//object constructor (old)
//function Animal(name,foodType,kingOfTheJungle){
//    this.name=name;
//    this.foodType=foodType;
//    this.kinfOfTheJungle=kingOfTheJungle;
//}

var lionC = new Animal("Simba","Carnivore",true);
var monkeyC = new Animal("Rafiki","Carnivore",false);

console.log(lionC);