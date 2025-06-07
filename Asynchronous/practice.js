const names = ["Harry" ,"Spongebob", "Patrick", "Squidward"];

const jsonString = JSON.stringify(names);
console.log(names);
console.log(jsonString);

const person = {
    "name" : "Patrick",
    "age" : 21,
    "isEmployed"  : true,
    "hobbies" : ["Travelling","Singing","Cooking"]
}

const personString = JSON.stringify(person);
console.log(personString);


const jsonPeople = `[    {"name" : "Patrick","age" : 21,"isEmployed"  : true},
                    {"name" : "Squidward","age" : 24,"isEmployed"  : false},
                    {"name" : "Spongebob","age" : 22,"isEmployed"  : true}
]`

const parsedData = JSON.parse(jsonPeople);
console.log(jsonPeople);
console.log(parsedData);


fetch("https://pokeapi.co/api/v2/pokemon/charizard")
.then(response => response.json())
.then(data => console.log(data.id,data.name,data.abilities))
.catch(error => console.log(error))