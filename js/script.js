console.log("Executed");

//object literal for the pet salon
const salon = {
    name:"The Fashion Pet",
    phone:"555-555-5555",
    address:{
        city:"Saint Petersburg",
        ave:"25th Ave N",
        number:"200"
    },
    pets:[]
}

console.log(salon);
let {name,phone,address:{city,ave,number}}=salon;
console.log(city);
console.log(name);

document.getElementById('info').innerHTML=`
<p> ${name} 
    <br>
    <b>${number} ${ave}, <br> ${city} </b>
    <br>
    ${phone} 
</p> 
`;
// template literals (template strings) are life


//object constructor for the pets
class Pet{
    constructor(name,age,type,breed,gender,service,ownersName,contactPhone){
        this.name=name;
        this.age=age;
        this.type=type;
        this.breed=breed;
        this.gender=gender;
        this.service=service;
        this.ownersName=ownersName;
        this.contactPhone=contactPhone;
    }
}

const scooby= new Pet("Scooby",50,"Dog","Dane","Male","Full","Shaggy","555-556-5556");
console.log(scooby);

//add two more objects
const scrappy= new Pet("Scrappy",30,"Dog","Dane","Male","Nail cut","Shaggy","555-556-5556");
console.log(scrappy);

const spoodli= new Pet("Spoodli",2,"Hamster","Regular Hamster","Male","Full","Colin","813-270-6105");
console.log(spoodli);

const lola=new Pet("Lola", 10, "Dog", "Maremma", "Female", "Full","Colin","813-270-6105");
console.log(lola);

//add pets to array

salon.pets.push(scooby);
salon.pets.push(scrappy);
salon.pets.push(spoodli);
salon.pets.push(lola);

console.log(salon.pets.length); //display number of elements in array

// print the name of the fourth pet
//console.log(salon.pets[3].name)

// use for loop

for( i=0; i < salon.pets.length ; i++ ) {
    let petsName = salon.pets[i].name;
    console.log(petsName);
}