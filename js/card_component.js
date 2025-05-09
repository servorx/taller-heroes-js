// toido esto es el array con cada uno de los diccionarios
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

// 
class heroCard extends HTMLElement {
    constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const container = document.createElement('div');
    container.innerHTML = /*HTML*/`
        <section>
            <header>
                <slot id="imagen"></slot>
            </header>
            <main>
                <slot id="nombre"></slot>
                <slot id="nombreClave"></slot>
                <slot id="universo"></slot>
                <slot id="año"></slot>
                <slot id="descripcionResumida"></slot>
            </main>
            <footer>
                <button id="button-main">Ver más</button>
            </footer>
        </section>
    `;
    

    const style = document.createElement('style');
    style.textContent = /*CSS*/`
    section {
        border: 2px solid #888;
        padding: 12px;
        border-radius: 10px;
        font-family: Arial;
        max-width: 400px;
        background: #fefefe;
    }
    header {
        font-weight: bold;
        font-size: 20px;
        margin-bottom: 10px;
        color: #003366;
    }
    main {
        font-size: 16px;
        margin-bottom: 10px;
        color: #222;
    }
    footer {
        font-size: 12px;
        color: #555;
        text-align: right;
    }
    `;

    shadow.append(style, container);
    }

    connectedCallback() {
        const imagen = this.shadowRoot.querySelector('#imagen');
        const nombre = this.shadowRoot.querySelector('#nombre');
        const nombreClave = this.shadowRoot.querySelector('#nombreClave');
        const universo = this.shadowRoot.querySelector('#universo');
        const año = this.shadowRoot.querySelector('#año');
        const descripcionResumida = this.shadowRoot.querySelector('#descricpionResumida');

        slot.addEventListener('slotchange', () => {
            const elementos = slot.assignedElements();
            info.textContent = `Elementos en el slot: ${elementos.length}`;
        });
    }
}
customElements.define("hero-card", heroCard);

// 
class heroFull extends HTMLElement {
    constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const container = document.createElement('div');
    container.innerHTML = `
    <section>
        <header>
            <slot name="titulo">[Sin título]</slot>
        </header>
        <main>
            <slot name="contenido">[Sin contenido]</slot>
        </main>
        <footer>
            <slot name="footer">[Sin pie de página]</slot>
        </footer>
    </section>
    `;

    const style = document.createElement('style');
    style.textContent = `
    section {
        border: 2px solid #888;
        padding: 12px;
        border-radius: 10px;
        font-family: Arial;
        max-width: 400px;
        background: #fefefe;
    }
    header {
        font-weight: bold;
        font-size: 20px;
        margin-bottom: 10px;
        color: #003366;
    }
    main {
        font-size: 16px;
        margin-bottom: 10px;
        color: #222;
    }
    footer {
        font-size: 12px;
        color: #555;
        text-align: right;
    }
    `;

    shadow.append(style, container);
    }
}
customElements.define("hero-full", heroFull);