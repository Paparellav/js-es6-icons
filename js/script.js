const objects = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.

// Milestone 2
// Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.

const wrapperContainer = document.querySelector(".wrapper");
console.log(wrapperContainer);
const animalsArray = [];
const vegetablesArray = [];
const usersArray = [];

objects.forEach((element) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("card-box");
    newDiv.innerHTML =
    `
        <i class = "${element.family} ${element.prefix}${element.name} ${element.color}"></i>
        <h3>${element.name}</h3>
    `;
    wrapperContainer.append(newDiv);

    if (element.type === "animal") {
        animalsArray.push(element);
    } else if (element.type === "vegetable") {
        vegetablesArray.push(element);
    } else {
        usersArray.push(element)
    }  
});

// :muso_unicorno: BONUS
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

const userOption = document.getElementById("categories");
userOption.addEventListener('change', function() {
    wrapperContainer.innerHTML = ""; 

    if (this.value === "animals") {
        generateDomElements (wrapperContainer, animalsArray)
    } else if (this.value === "vegetables") {
        generateDomElements (wrapperContainer, vegetablesArray)
    } else if (this.value === "users") {
        generateDomElements (wrapperContainer, usersArray)
    } else {
        generateDomElements (wrapperContainer, objects)
    }
});


//FUNCTIONS
function generateDomElements (container, array) {
    array.forEach ((element) => {
        const newDiv = document.createElement("div");
        newDiv.classList.add("card-box");
        newDiv.innerHTML =
         `
            <i class = "${element.family} ${element.prefix}${element.name} ${element.color}"></i>
            <h3>${element.name}</h3>
        `;
        container.append(newDiv);
    });
}