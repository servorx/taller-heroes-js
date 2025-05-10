const HEROES = [
    {
        nombre: "Bruce Wayne",
        nombreClave: "Batman",
        universo: "DC",
        year: 1939,
        descripcionResumida: "Un vigilante enmascarado que protege Gotham.",
        descripcionCompleta: "Bruce Wayne, también conocido como Batman, es un multimillonario filántropo que combate el crimen en Gotham usando su intelecto, habilidades físicas y tecnología avanzada.",
        imagen: "./img/bat_man.jpeg",
        imagen1: "./img/bat_man1.jpeg"
    },
    {
        nombre: "Steve Rogers",
        nombreClave: "Capitán América",
        universo: "Marvel",
        year: 1941,
        descripcionResumida: "Un super soldado patriótico de la Segunda Guerra Mundial.",
        descripcionCompleta: "Steve Rogers fue transformado en un supersoldado mediante un experimento durante la Segunda Guerra Mundial y desde entonces lucha por la justicia como Capitán América, símbolo de valor y liderazgo.",
        imagen: "./img/capitan_america.jpeg",
        imagen1: "./img/capitan_america1.jpeg"
    },
    {
        nombre: "Barry Allen",
        nombreClave: "Flash",
        universo: "DC",
        year: 1956,
        descripcionResumida: "El hombre más rápido del mundo.",
        descripcionCompleta: "Barry Allen adquirió su velocidad sobrehumana tras un accidente en un laboratorio. Como Flash, protege Central City enfrentándose a amenazas con su velocidad y su ingenio científico.",
        imagen: "./img/flash.jpeg",
        imagen1: "./img/flash1.jpeg"
    },
    {
        nombre: "Bruce Banner",
        nombreClave: "Hulk",
        universo: "Marvel",
        year: 1962,
        descripcionResumida: "Un científico con una fuerza descomunal cuando se enfurece.",
        descripcionCompleta: "Bruce Banner se transforma en Hulk, una criatura de fuerza colosal, cuando se enfurece. Lucha con su dualidad entre razón y furia mientras ayuda a salvar al mundo.",
        imagen: "./img/hulk.jpeg",
        imagen1: "./img/hulk1.jpeg"
    },
    {
        nombre: "Tony Stark",
        nombreClave: "Iron Man",
        universo: "Marvel",
        year: 1963,
        descripcionResumida: "Un genio millonario con una armadura tecnológica.",
        descripcionCompleta: "Tony Stark es un empresario brillante que diseñó una armadura de alta tecnología para salvar su vida. Como Iron Man, combate amenazas globales combinando inteligencia, innovación y carisma.",
        imagen: "./img/iron_man.jpeg",
        imagen1: "./img/iron_man1.jpeg"
    },
    {
        nombre: "Hal Jordan",
        nombreClave: "Linterna Verde",
        universo: "DC",
        year: 1959,
        descripcionResumida: "Un piloto que empuña el anillo del poder.",
        descripcionCompleta: "Hal Jordan es un piloto de pruebas elegido por los Guardianes del Universo para portar un anillo de poder que le permite crear construcciones con su voluntad como miembro del Cuerpo de Linternas Verdes.",
        imagen: "./img/linterna_verde.jpeg",
        imagen1: "./img/linterna_verde1.jpeg"
    },
    {
        nombre: "Clark Kent",
        nombreClave: "Superman",
        universo: "DC",
        year: 1938,
        descripcionResumida: "El último hijo de Krypton con poderes sobrehumanos.",
        descripcionCompleta: "Clark Kent, nacido como Kal-El en el planeta Krypton, posee habilidades como vuelo, fuerza sobrehumana y visión de rayos X. Como Superman, defiende a la humanidad con un fuerte sentido de justicia.",
        imagen: "./img/super_man.jpeg",
        imagen1: "./img/super_man1.jpeg"
    },
    {
        nombre: "Thor Odinson",
        nombreClave: "Thor",
        universo: "Marvel",
        year: 1962,
        descripcionResumida: "El dios del trueno con un martillo mágico.",
        descripcionCompleta: "Thor, hijo de Odín y príncipe de Asgard, empuña el poderoso martillo Mjolnir. Combina su herencia divina con valentía para proteger tanto la Tierra como los Nueve Reinos.",
        imagen: "./img/thor.jpeg",
        imagen1: "./img/thor.jpeg"
    },
    {
        nombre: "Diana Prince",
        nombreClave: "Wonder Woman",
        universo: "DC",
        year: 1941,
        descripcionResumida: "Una guerrera amazona con poderes divinos.",
        descripcionCompleta: "Diana, princesa de las Amazonas, es una semidiosa entrenada en combate desde pequeña. Como Wonder Woman, defiende la paz, la justicia y la igualdad en el mundo humano.",
        imagen: "./img/wonder_woman.jpeg",
        imagen1: "./img/wonder_woman1.jpeg"
    }
];


// carta del heroe
class heroCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    set data(objeto) {
        this._data = objeto;
        this.render();
    }
    connectedCallback(){
        this.eventListener()
    }
        // contenido del componente
        // TODO: Terminar lo de los componentes, no funciona
    render(){
        if (!this._data) return;

        const {nombre, nombreClave, universo, year, descripcionResumida,} = this._data;
        this.shadowRoot.innerHTML = /*HTML*/`
            <div class="card">
                <img src="../img/${nombre}.jpeg" alt="${nombre}">
                <h2>${nombre}</h2>
                <h3>${nombreClave}</h3>
                <p><strong>Universo:</strong> ${universo}</p>
                <p><strong>Año:</strong> ${year}</p>
                <p>${descripcionResumida}</p>
                <button id="abrir-full">Ver más</button>
            </div>
            <div class="full" id="full">
                <div class="full-content">
                    <span class="close" id="cerrar-full">&times;</span>
                    <h2 class="nombree">${nombre} (${nombreClave})</h2>
                    <div class="cont">
                        <p><strong>Universo:</strong> ${universo}</p>
                        <p><strong>year:</strong> ${year}</p>
                        <p>${descripcion_full}</p>
                    </div>
                </div>
            </div>
            <style>
            .card {
                position: relative;
                font-family: Arial, sans-serif;
                border: 1px solid #000;
                border-radius: 10px;
                padding: 1rem;
                width: 15rem;
                height: 30rem;
                background: #f0f;
                border: 3px solid #000;
                display: flex;
                flex-direction: column;
            }
            img {
                object-fit: cover;
                object-position: center;
                border-radius: 10px;
                width: 100%;
                height: 30rem;
                border: 3px solid #000;
            }
            h2 {
                margin: 0.5rem 0 0.2rem;
                font-size: 1.2rem;
                color: #ff0;
            }
            h3 {
                margin: 0;
                font-size: 1rem;
                color: #39f;
            }
            p {
                font-size: 0.9rem;
                color: #000;
            }
            button {
                position: absolute;
                bottom: 1vh;
                right: 1vw;
                padding: 8px 12px;
                width: 100px;
                background-color: #f49;
                color: #2f2;
                border: none;
                border-radius: 20px;
                cursor: pointer;
            }
            .full {
                display: none;
                position: fixed;
                width: 10rem;
                height: 100rem;
                justify-content: center;
            }
            .full-content {
                position: relative;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
                padding: 2vw;
                border-radius: 10px;
                width: 90%;
                height:7rem;
                max-width: 5rem;
                text-align: center;
                justify-self: center;
                margin-top: 8rem;
            }    
            .cont{
                justify-self: center;
                position: absolute;
                bottom: 1rem;
                width: 85%;
                background-color:  #eee;
                border-radius: 10px;
            }
            .nombree{
                color: #f76;
            }
            .close {
                color: #aaa;
                float: right;
                font-size: 28px;
                font-weight: bold;
                cursor: pointer;
            }
            @media (max-width: 900px) {
                .tarjeta {
                width: 2rem;
                height: 3rem;
                }
                img {
                height: 5rem;
                }
            }
            </style>
        `;
    };
    eventListener(){
        const card = this.shadowRoot.getElementById("card");
        const open = this.shadowRoot.getElementById("open-card");
        const close = this.shadowRoot.getElementById("close-card");

        card.addEventListener("click", (e) => {
            if (e.target === modal) {
            modal.style.display = "none";
            }
        });
        open.addEventListener("click", () => {
            console.log("Click")
            modal.style.display = "block";
        });
        close.addEventListener("click", () => {
            modal.style.display = "none";
        });
    };

        // TODO: terminar lo de los callbacks, no sé cómo colocar cada elemento dentro del callback
}
// registrar el componente commo <hero-card>
customElements.define("hero-card", heroCard);


HEROES.forEach(personaje => {
    const cardd = document.createElement('cardd-heroe');
    cardd.data = {
    nombre: personaje.nombre,
    nombreClave: personaje.nombreClave,
    universo: personaje.universo,
    year: personaje.year,
    descripcionResumida: personaje.descripcionResumida,
    descripcionResumida: personaje.descripcionResumida,
    imagen1: personaje.imagen1
    };
    document.getElementById('container').appendChild(tarjeta);
});
const busquedaInput = document.getElementById("busqueda");
const cointainer = document.getElementById("container");

function rednerFilter(texto) {
cointainer.innerHTML = "";
const filtrados = personajes.lista.filter(personaje => 
    personaje.nombre.toLowerCase().includes(texto.toLowerCase()) ||
    personaje.nombreClave.toLowerCase().includes(texto.toLowerCase()) ||
    personaje.universo.toLowerCase().includes(texto.toLowerCase())
);
filtrados.forEach(personaje => {
    const tarjeta = document.createElement("tarjeta-personaje");
    tarjeta.data = {
        nombre: personaje.nombre,
        nombreClave: personaje.nombreClave,
        universo: personaje.universo,
        year: personaje.year,
        descripcionResumida: personaje.descripcionResumida,
        descripcionCompleta: personaje.descripcionCompleta,
        imagen1: personaje.imagen1
    };
    contenedor.appendChild(tarjeta);
    });
}
busquedaInput.addEventListener("input", (e) => {
    rednerFilter(e.target.value);
});

