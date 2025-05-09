const HEROES = [
    {
        nombre: "Bruce Wayne",
        nombreClave: "Batman",
        universo: "DC",
        año: 1939,
        descripcionResumida: "Un vigilante enmascarado que protege Gotham.",
        descripcionCompleta: "Bruce Wayne, también conocido como Batman, es un multimillonario filántropo que combate el crimen en Gotham usando su intelecto, habilidades físicas y tecnología avanzada."
    },
    {
        nombre: "Steve Rogers",
        nombreClave: "Capitán América",
        universo: "Marvel",
        año: 1941,
        descripcionResumida: "Un super soldado patriótico de la Segunda Guerra Mundial.",
        descripcionCompleta: "Steve Rogers fue transformado en un supersoldado mediante un experimento durante la Segunda Guerra Mundial y desde entonces lucha por la justicia como Capitán América, símbolo de valor y liderazgo."
    },
    {
        nombre: "Barry Allen",
        nombreClave: "Flash",
        universo: "DC",
        año: 1956,
        descripcionResumida: "El hombre más rápido del mundo.",
        descripcionCompleta: "Barry Allen adquirió su velocidad sobrehumana tras un accidente en un laboratorio. Como Flash, protege Central City enfrentándose a amenazas con su velocidad y su ingenio científico."
    },
    {
        nombre: "Bruce Banner",
        nombreClave: "Hulk",
        universo: "Marvel",
        año: 1962,
        descripcionResumida: "Un científico con una fuerza descomunal cuando se enfurece.",
        descripcionCompleta: "Bruce Banner se transforma en Hulk, una criatura de fuerza colosal, cuando se enfurece. Lucha con su dualidad entre razón y furia mientras ayuda a salvar al mundo."
    },
    {
        nombre: "Tony Stark",
        nombreClave: "Iron Man",
        universo: "Marvel",
        año: 1963,
        descripcionResumida: "Un genio millonario con una armadura tecnológica.",
        descripcionCompleta: "Tony Stark es un empresario brillante que diseñó una armadura de alta tecnología para salvar su vida. Como Iron Man, combate amenazas globales combinando inteligencia, innovación y carisma."
    },
    {
        nombre: "Hal Jordan",
        nombreClave: "Linterna Verde",
        universo: "DC",
        año: 1959,
        descripcionResumida: "Un piloto que empuña el anillo del poder.",
        descripcionCompleta: "Hal Jordan es un piloto de pruebas elegido por los Guardianes del Universo para portar un anillo de poder que le permite crear construcciones con su voluntad como miembro del Cuerpo de Linternas Verdes."
    },
    {
        nombre: "Clark Kent",
        nombreClave: "Superman",
        universo: "DC",
        año: 1938,
        descripcionResumida: "El último hijo de Krypton con poderes sobrehumanos.",
        descripcionCompleta: "Clark Kent, nacido como Kal-El en el planeta Krypton, posee habilidades como vuelo, fuerza sobrehumana y visión de rayos X. Como Superman, defiende a la humanidad con un fuerte sentido de justicia."
    },
    {
        nombre: "Thor Odinson",
        nombreClave: "Thor",
        universo: "Marvel",
        año: 1962,
        descripcionResumida: "El dios del trueno con un martillo mágico.",
        descripcionCompleta: "Thor, hijo de Odín y príncipe de Asgard, empuña el poderoso martillo Mjolnir. Combina su herencia divina con valentía para proteger tanto la Tierra como los Nueve Reinos."
    },
    {
        nombre: "Diana Prince",
        nombreClave: "Wonder Woman",
        universo: "DC",
        año: 1941,
        descripcionResumida: "Una guerrera amazona con poderes divinos.",
        descripcionCompleta: "Diana, princesa de las Amazonas, es una semidiosa entrenada en combate desde pequeña. Como Wonder Woman, defiende la paz, la justicia y la igualdad en el mundo humano."
    }
];


// function renderHeroes(list) {
//     container.innerHTML = "";
//     list.forEach(hero => {
//         const card = document.createElement("hero-card");
//         card.data = hero;
//         container.appendChild(card);
//     });
// }

// renderHeroes(HEROES); // Mostrar todos al inicio

// input.addEventListener("input", (e) => {
//     const valor = e.target.value.toLowerCase();
//     const filtrados = HEROES.filter(h => h.nombreClave.toLowerCase().includes(valor));
//     console.log(`El usuario ingresó un personaje ${valor} en el buscador`);
//     renderHeroes(filtrados);
// });

// document.body.addEventListener("show-full", (event) => {
//     const modal = document.createElement("hero-full");
//     modal.data = event.detail;
//     document.body.appendChild(modal);
// });


// codigo de barra de busqeuda HTML y CSS

// const clotheList = [
//     "Tea Dress",
//     "Pinafore Dress",
//     "Swing Dress",
//     "Shirtwaist Dress",
//     "Peplum Dress",
//     "Tweed Dress",
//     "Flapper Dress",
//     "Gingham Dress",
//     "Puff Sleeve Blouse",
//     "Peter Pan Collar Blouse",
//     "Lace Blouse",
//     "Victorian Blouse",
//     "Gibson Girl Blouse",
//     "Bow-Tie Blouse",
//     "Edwardian Blouse",
//     "Silk Blouse",
//     "High-Waisted Trousers",
//     "Wide-Leg Pants",
//     "Culottes",
//     "Pleated Skirt",
//     "A-Line Skirt",
//     "Circle Skirt",
//     "Pencil Skirt",
//     "Tartan Skirt",
//     "Swing Coat",
//     "Trench Coat",
//     "Cape Coat",
//     "Faux Fur Coat",
//     "Bolero Jacket",
//     "Cardigan Sweater",
//     "Twin Set",
//     "Cable Knit Sweater",
//     "Beret Hat",
//     "Cloche Hat",
//     "Pillbox Hat",
//     "Fascinator",
//     "Cat Eye Sunglasses",
//     "Round Frame Glasses",
//     "Pearl Necklace",
//     "Charm Bracelet",
//     "Brooch",
//     "Silk Scarf",
//     "Lace Gloves",
//     "Satin Gloves",
//     "Oxford Shoes",
//     "Mary Jane Shoes",
//     "T-Strap Heels",
//     "Kitten Heels",
//     "Saddle Shoes",
//     "Vintage Handbag",
//     "Beaded Purse",
//     "Crochet Bag",
//     "Straw Handbag",
//     "Bustier Top",
//     "Corset Top",
//     "Petticoat",
//     "Stockings",
//     "Seamed Tights",
//     "Vintage Lingerie",
//     "Ruffled Bloomers",
//     "Apron Dress",
//     "Modern light Clothes",
//     "Light Dress Bless",
//     "Midnight Edge Faux Leather Jacket",
//     "Golden Glow Wrap Dress",
// ]; 
// // esta es la lista que se expresa para la barra de busqueda creando un array


// // se obtienen referencias de resultado y la barra de busqueda a traves del query(no se que es eso)
// const resultBox = document.querySelector(".results");
// const inputBox = document.querySelector(".search-bar");

// // se toma un array de los resultados filtrados y genera una lisa para mostrarlos, cada <li> tiene un onlick que le permite autocompletarse a si mismo 
// const displayResults = function (result) {
//     const resultHTML = result.map(function (clothe) {
//         return `<li onclick="selectInput(this)">${clothe}</li>`;
//     });

//     resultBox.innerHTML = "<ul>" + resultHTML.join("") + "</ul>";
// };

// // es una funcion que sucede cuando un usuario empieza a escribir en la barra de busqeuda, convierte el texto a minmusculas para evitar problemas, si el campo de entrada esta vacio, no muestra nada, si hay texto, filtra la lista de prendas, y al final llama a displayResults para mostrar la lista filtrada
// inputBox.onkeyup = function (e) {
//     let result = [];
//     const input = inputBox.value.toLowerCase();

//     if (input.length === 0) {
//         resultBox.innerHTML = "";
//         return;
//     }

//     result = clotheList.filter((clothe) =>
//         clothe.toLowerCase().includes(input)
//     );

//     displayResults(result);
// };

// // funcion para seleccionar una prenda, cuando se hace click, se coloca en la barra de busqueda y luego, los resultados desaparecen.
// function selectInput(clothe) {
//     inputBox.value = clothe.innerText;
//     resultBox.innerHTML = "";
// }