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
    constructor(name,age,type,breed,gender,service,ownersName,ownersAddress,contactPhone){
        this.name=name;
        this.age=age;
        this.type=type;
        this.breed=breed;
        this.gender=gender;
        this.service=service;
        this.ownersName=ownersName;
        this.ownersAddress=ownersAddress;
        this.contactPhone=contactPhone;
    }
}

const scooby= new Pet("Scooby",50,"Dog","Dane","Male","Full","Shaggy","123 Main St","555-556-5556");
console.log(scooby);

//add two more objects
const scrappy= new Pet("Scrappy",30,"Cat","Dane","Male","Nail cut","Shaggy","234 45th Ave","555-556-5556");
console.log(scrappy);

const spoodli= new Pet("Spoodli",2,"Hamster","Regular Hamster","Male","Full","Colin","456 Oak Blvd","813-270-6105");
console.log(spoodli);

const lola=new Pet("Lola", 10, "Dog", "Maremma", "Female", "Full","Colin","456 Oak Blvd","813-270-6105");
console.log(lola);

//add pets to array

salon.pets.push(scooby);
salon.pets.push(scrappy);
salon.pets.push(spoodli);
salon.pets.push(lola);

//console.log(salon.pets.length); //display number of elements in array

// print the name of the fourth pet
//console.log(salon.pets[3].name)

// use for loop

for( i=0; i < salon.pets.length ; i++ ) {
    let petsName = salon.pets[i].name;
   // console.log(petsName);
}

// get inputs and save in variable using id

// register function

let txtname = document.getElementById('petName');
let txtage = document.getElementById('petAge');
let txttype = document.getElementById('petType');
let txtbreed = document.getElementById('petBreed');
let txtgender = document.getElementById('petGender');
let txtservice = document.getElementById('petService');
let txtowner = document.getElementById('ownerName');
let txtownersaddress = document.getElementById('ownersAddress');
let txtphone = document.getElementById('contactPhone')

function register(){
    // get the values from txt elements
 /*   console.log(txtname.value);
    console.log(txtage.value);
    console.log(txttype.value);
    console.log(txtbreed.value);
    console.log(txtgender.value);
    console.log(txtservice.value);
    console.log(txtowner.value);
    console.log(txtphone.value);
*/
    // create the pet object and push it into array (generic)

    let thePet = new Pet(txtname.value,txtage.value,txttype.value,txtbreed.value,txtgender.value,txtservice.value,txtowner.value,txtownersaddress.value,txtphone.value);

    console.log(thePet);

    // push pets
    salon.pets.push(thePet);
    console.log(salon.pets);

    // clear the inputs
    clear();
 //   display();  // directory.js
    numberOfPets();
    displayTable(thePet)
}

function numberOfPets(){
    let numOfPets = salon.pets.length;
    document.getElementById('numOfPets').innerHTML = `<h1>Number of Pets: ${numOfPets}</h1>`;
}

function clear(){
    txtname.value = "";
    txtage.value = "";
    txttype.value = "";
    txtbreed.value = "";
    txtgender.value = "";
    txtservice.value = "";
    txtowner.value = "";
    txtownersaddress.value="";
    txtphone.value = "";
}

// display on the console the oldest pet and the youngest pet
/*
let petAges = [];

for(let i = 0; i < salon.pets.length; i++){
    petAges.isArray
  //  console.log(i);
  //  console.log(salon.pets[i].age);
    let temp = parseInt(salon.pets[i].age);
    petAges.push(temp);
    petAges.sort(function(a, b){return a - b});
    let small = petAges[0];
    let large = petAges[petAges.length - 1];
        if(petAges.length == salon.pets.length){
            console.log(`The smallest number is ${small}`);
            console.log(`The largest number is ${large}`);
        }else{
            console.log("Calculating...");
        }

}
*/

// add css to the form
// done using 'float: right;'

// display number of pets, when changed, update #of pets
// in directory.js

function displayTable(aPet){
    var row =   `<tr>
                    <td>${aPet.name}</td>
                    <td>${aPet.age}</td>
                    <td>${aPet.type}</td>
                    <td>${aPet.breed}</td>
                    <td>${aPet.gender}</td>
                    <td>${aPet.service}</td>
                    <td>${aPet.ownersName}</td>
                    <td>${aPet.ownersAddress}</td>
                    <td>${aPet.phone}</td>
                </tr>`;
    var tbody = document.getElementById('rowPet');
    tbody.innerHTML = row;
}


displayTable(scooby);
displayTable(scrappy);