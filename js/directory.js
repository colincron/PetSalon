function display(){

let pets = salon.pets;
console.log(pets);

const petSection = document.getElementById('pets');

let text ="";

let dogs = 0;
let cats = 0;
let hamsters = 0;
let numText = ""


for(let i = 0; i < pets.length; i++){
    if(pets[i].type == "Dog"){
        dogs++;
    }else if(pets[i].type == "Cat"){
        cats++;
    }else{
        hamsters++;
    }
    console.log(`Dogs: ${dogs}`);
    console.log(`Cats: ${cats}`);
    console.log(`Hamsters: ${hamsters}`);
    numText = `
    <div class="numOfTypes">
    <p>Dogs: ${dogs}</p>
    <p>Cats: ${cats}</p>
    <p>Hamsters: ${hamsters}</p>
    </div>
    `
}

document.getElementById("typesOfPets").innerHTML = numText 

for(let i = 0; i < pets.length; i++){
    console.log(pets[i]);
    if(pets[i].type == "Cat"){
        imageSrc = "img/calico-cat.jpg";
    }else if(pets[i].type == "Dog"){
        imageSrc = "img/dog.jpg";
    }else{
        imageSrc = "img/hamster1.jpeg"
    }


    text += `
        <div class="pet">
            <p><img class="img-thumbnail thisonepicture" src="${imageSrc}"></p>
            <h2>Name: ${pets[i].name}</h2>
            <p>Age: ${pets[i].age}</p>
            <p>Type: ${pets[i].type}</p>
            <p>Breed: ${pets[i].breed}</p>
            <p>Gender: ${pets[i].gender}</p>
            <p>Service: ${pets[i].service} </p>
            <p>Owner: ${pets[i].ownersName}</p>
            <p>Owner's Address: ${pets[i].ownersAddress}</p>
            <p>Phone: ${pets[i].contactPhone} </p>
        </div>
        </div>
    `;
}

petSection.innerHTML = text;
}
display();
numberOfPets()