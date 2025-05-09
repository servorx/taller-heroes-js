// toido esto es el array con cada uno de los diccionarios
const HEROES = [
    {
        nombre: "Bruce Wayne",
        nombreClave: "Batman",
        universo: "DC",
        año: 1939,
        descripcionResumida: "Un vigilante enmascarado que protege Gotham.",
        descripcionCompleta: "Bruce Wayne, también conocido como Batman, es un multimillonario filántropo que combate el crimen en Gotham usando su intelecto, habilidades físicas y tecnología avanzada.",
        imagen: "./img/bat_man.jpeg",
        imagen1: "./img/bat_man1.jpeg"
    },
    {
        nombre: "Steve Rogers",
        nombreClave: "Capitán América",
        universo: "Marvel",
        año: 1941,
        descripcionResumida: "Un super soldado patriótico de la Segunda Guerra Mundial.",
        descripcionCompleta: "Steve Rogers fue transformado en un supersoldado mediante un experimento durante la Segunda Guerra Mundial y desde entonces lucha por la justicia como Capitán América, símbolo de valor y liderazgo.",
        imagen: "./img/capitan_america.jpeg",
        imagen1: "./img/capitan_america1.jpeg"
    },
    {
        nombre: "Barry Allen",
        nombreClave: "Flash",
        universo: "DC",
        año: 1956,
        descripcionResumida: "El hombre más rápido del mundo.",
        descripcionCompleta: "Barry Allen adquirió su velocidad sobrehumana tras un accidente en un laboratorio. Como Flash, protege Central City enfrentándose a amenazas con su velocidad y su ingenio científico.",
        imagen: "./img/flash.jpeg",
        imagen1: "./img/flash1.jpeg"
    },
    {
        nombre: "Bruce Banner",
        nombreClave: "Hulk",
        universo: "Marvel",
        año: 1962,
        descripcionResumida: "Un científico con una fuerza descomunal cuando se enfurece.",
        descripcionCompleta: "Bruce Banner se transforma en Hulk, una criatura de fuerza colosal, cuando se enfurece. Lucha con su dualidad entre razón y furia mientras ayuda a salvar al mundo.",
        imagen: "./img/hulk.jpeg",
        imagen1: "./img/hulk1.jpeg"
    },
    {
        nombre: "Tony Stark",
        nombreClave: "Iron Man",
        universo: "Marvel",
        año: 1963,
        descripcionResumida: "Un genio millonario con una armadura tecnológica.",
        descripcionCompleta: "Tony Stark es un empresario brillante que diseñó una armadura de alta tecnología para salvar su vida. Como Iron Man, combate amenazas globales combinando inteligencia, innovación y carisma.",
        imagen: "./img/iron_man.jpeg",
        imagen1: "./img/iron_man1.jpeg"
    },
    {
        nombre: "Hal Jordan",
        nombreClave: "Linterna Verde",
        universo: "DC",
        año: 1959,
        descripcionResumida: "Un piloto que empuña el anillo del poder.",
        descripcionCompleta: "Hal Jordan es un piloto de pruebas elegido por los Guardianes del Universo para portar un anillo de poder que le permite crear construcciones con su voluntad como miembro del Cuerpo de Linternas Verdes.",
        imagen: "./img/linterna_verde.jpeg",
        imagen1: "./img/linterna_verde1.jpeg"
    },
    {
        nombre: "Clark Kent",
        nombreClave: "Superman",
        universo: "DC",
        año: 1938,
        descripcionResumida: "El último hijo de Krypton con poderes sobrehumanos.",
        descripcionCompleta: "Clark Kent, nacido como Kal-El en el planeta Krypton, posee habilidades como vuelo, fuerza sobrehumana y visión de rayos X. Como Superman, defiende a la humanidad con un fuerte sentido de justicia.",
        imagen: "./img/super_man.jpeg",
        imagen1: "./img/super_man1.jpeg"
    },
    {
        nombre: "Thor Odinson",
        nombreClave: "Thor",
        universo: "Marvel",
        año: 1962,
        descripcionResumida: "El dios del trueno con un martillo mágico.",
        descripcionCompleta: "Thor, hijo de Odín y príncipe de Asgard, empuña el poderoso martillo Mjolnir. Combina su herencia divina con valentía para proteger tanto la Tierra como los Nueve Reinos.",
        imagen: "./img/thor.jpeg",
        imagen1: "./img/thor.jpeg"
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

// carta del heroe
class heroCard extends HTMLElement {
    constructor(HEROES) {
        super();
        this.attachShadow({ mode: "open" });

        // contenido del componente
        // TODO: Terminar lo de los componentes, no funciona
        const container = document.createElement('div');
        container.innerHTML = /*HTML*/`
            <section>
                <header>
                    <slot class="imagen"></slot>
                </header>
                <main>
                    <slot class="nombre"></slot>
                    <slot class="nombreClave"></slot>
                    <slot class="universo"></slot>
                    <slot class="año"></slot>
                    <slot class="descripcionResumida"></slot>
                </main>
                <footer>
                    <button class="button-main">Ver más</button>
                </footer>
            </section>
        `;
        
        // contenido del style
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

        // añadir contenido que se escribió al shadow DOM
        shadow.append(style, container);
        }

        // TODO: terminar lo de los callbacks, no sé cómo colocar cada elemento dentro del callback
        connectedCallback() {
            const imagen = this.shadowRoot.querySelector('slot[class="imagen"]');
            const nombre = this.shadowRoot.querySelector('slot[class="nombre"]');
            const nombreClave = this.shadowRoot.querySelector('slot=[class="nombreClave"]');
            const universo = this.shadowRoot.querySelector('slot=[class="universo"]');
            const año = this.shadowRoot.querySelector('class=[class="año"]');
            const descripcionResumida = this.shadowRoot.querySelector('class=["descricpionResumida"]');
                
            imagen.addEventListener('slotchange', () => {
                const heroe_elemento = imagen.assignedElements();
                info.innerHTML = `<img src="${imagen}.jpeg" alt="bat_man">`;
            });
        }
}

// registrar el componente commo <hero-card>
customElements.define("hero-card", heroCard);


// ventana con detalles
class heroFull extends HTMLElement {
    constructor() {
    super();
    this.attachShadow({ mode: "open" });

    // TODO: Terminar de arreglar los estilos
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

    // TODO: terminar de arreglar los estilos
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
    // TODO: terminar lo de los callbacks, no sé cómo colocar cada elemento dentro del callback
    connectedCallback() {
        const imagen = this.shadowRoot.get('slot[class="imagen"]');
        const nombre = this.shadowRoot.querySelector('slot[class="nombre"]');
        const nombreClave = this.shadowRoot.querySelector('slot=[class="nombreClave"]');
        const universo = this.shadowRoot.querySelector('slot=[class="universo"]');
        const year = this.shadowRoot.querySelector('class=[class="year"]');
        const descripcionResumida = this.shadowRoot.querySelector('class=["descricpionResumida"]');
            
        imagen.addEventListener('slotchange', () => {
            const a = imagen.assignedElements();
            info.innerHTML = `<img src="/img/${}.jpeg" alt="bat_man">`;
        });
        nombre.addEventListener('slotchange', () => {
            const a = nombre.assignedElements();
            info.innerHTML = `<img src="/img/${}.jpeg" alt="bat_man">`;
        });
        nombreClave.addEventListener('slotchange', () => {
            const a = nombreClave.assignedElements();
            info.innerHTML = `<img src="/img/${}.jpeg" alt="bat_man">`;
        });
        universo.addEventListener('slotchange', () => {
            const a = universo.assignedElements();
            info.innerHTML = `<img src="/img/${}.jpeg" alt="bat_man">`;
        });
        year.addEventListener('slotchange', () => {
            const a = nombre.assignedElements();
            info.innerHTML = `<img src="/img/${}.jpeg" alt="bat_man">`;
        });
        descripcionResumida.addEventListener('slotchange', () => {
            const a = nombre.assignedElements();
            info.innerHTML = `<img src="/img/${}.jpeg" alt="bat_man">`;
        });
    }
}
customElements.define("hero-full", heroFull);