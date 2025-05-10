class TarjetaPersonaje extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this._data = null;
    }
  
    set data(objeto) {
        this._data = objeto;
        this.render();
    }

    connectedCallback(){
        this.eventListener()
    }
    render() {
        if (!this._data) return;
    
        const { nombre, nombreClave, casa, anio, descripcion, descripcion_full, foto } = this._data;
    
        this.shadowRoot.innerHTML = `
            <style>
            .tarjeta {
                position: relative;
                font-family: Arial, sans-serif;
                border: 1px solid #ccc;
                border-radius: 10px;
                padding: 2vw;
                width: 14vw;
                height: 72vh;
                background: rgba(95, 75, 182, 0.41);
                backdrop-filter: blur(5px);
                border: 3px solid #E6E6EA;
                display: flex;
                flex-direction: column;
                box-shadow: 0px 0px 7px #E6E6EA;
            }
            img {
                object-fit: cover;
                object-position: center;
                border-radius: 10px;
                width: 100%;
                height: 40vh;
                border: 3px solid #E6E6EA;
                box-shadow: 0px 0px 30px #E6E6EA;
            }
            h2 {
                margin: 0.5em 0 0.2em;
                font-size: 1.2em;
                color: #FED766;
                text-shadow: 0px 0px 5px #611c1c;
            }
            h3 {
                margin: 0;
                font-size: 1em;
                color: #32292F;
            }
            p {
                font-size: 0.9em;
                color: #161315;
            }
            button {
                position: absolute;
                bottom: 1vh;
                right: 1vw;
                padding: 8px 12px;
                width: 100px;
                background-color: #FE4A49;
                color: #FED766;
                border: none;
                border-radius: 20px;
                cursor: pointer;
            }
            button:hover {
                background-color: #009FB7;
                box-shadow: 0px 0px 5px #E6E6EA;
            }
            .modal {
                display: none;
                position: fixed;
                z-index: 999;
                left: 0;
                top: 0;
                width: 100vw;
                height: 100vh;
                background-color: rgba(0, 0, 0, 0.5);
                justify-content: center;
            }
            .modal-content {
                position: relative;
                background-image: url(${foto});
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
                padding: 2vw;
                border-radius: 10px;
                width: 90%;
                height:75vh;
                max-width: 25vw;
                text-align: center;
                justify-self: center;
                margin-top: 8vh;
                box-shadow: 0px 0px 10px  black;
            }    
            .cont{
                justify-self: center;
                position: absolute;
                bottom: 2vh;
                width: 85%;
                background-color:  #E6E6EA;
                border-radius: 10px;
            }
            .mnombre{
                text-shadow: 1px 1px 0px #FE4A49;
                color: #FED766;
            }
            .close {
                color: #aaa;
                float: right;
                font-size: 28px;
                font-weight: bold;
                cursor: pointer;
            }
            .close:hover {
                color: black;
            }
            @media (max-width: 900px) {
                .tarjeta {
                width: 39vw;
                height: 65vh;
                box-shadow: 0px 0px 10px #E6E6EA;
                }
    
                img {
                height: 35vh;
                }
            }
            </style>
            <div class="tarjeta">
                <img src="${foto}" alt="${nombre}">
                <h2>${nombre}</h2>
                <h3>${nombreClave}</h3>
                <p><strong>Casa:</strong> ${casa}</p>
                <p><strong>Año:</strong> ${anio}</p>
                <p>${descripcion}</p>
                <button id="abrir-modal">Ver más</button>
            </div>
            <div class="modal" id="modal">
                <div class="modal-content">
                    <span class="close" id="cerrar-modal">&times;</span>
                    <h2 class="mnombre">${nombre} (${nombreClave})</h2>
                    <div class="cont">
                        <p><strong>Casa:</strong> ${casa}</p>
                        <p><strong>Año:</strong> ${anio}</p>
                        <p>${descripcion_full}</p>
                    </div>
                </div>
            </div>
        `;
    };

    eventListener(){
        const modal = this.shadowRoot.getElementById("modal");
        const abrir = this.shadowRoot.getElementById("abrir-modal");
        const cerrar = this.shadowRoot.getElementById("cerrar-modal");

        abrir.addEventListener("click", () => {
            console.log("Click")
            modal.style.display = "block";
        });
    
        cerrar.addEventListener("click", () => {
            modal.style.display = "none";
        });
    
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
            modal.style.display = "none";
            }
        });
    };
}
  
customElements.define('tarjeta-personaje', TarjetaPersonaje);
const personajes = {
    lista: [
        {
            imagen: 'https://th.bing.com/th/id/OIP.n2Hii7_mmHhLDJPzF0bMTQHaNS?cb=iwp1&rs=1&pid=ImgDetMain',
            nombre: "Loki",
            nombre_clave: "Loki",
            casa: "Marvel",
            anio_aparicion: 1949,
            descripcion_resumen: "Dios del engaño y hermano adoptivo de Thor.",
            descripcion_full: "Loki es un astuto hechicero asgardiano con habilidades mágicas. Aunque a menudo actúa como villano, también ha sido aliado y antihéroe en distintas ocasiones."
        },
        {
            imagen: 'https://th.bing.com/th/id/R.e2911709b458cf59cba9f9c681674a5d?rik=nCgav4TBv00J%2fg&pid=ImgRaw&r=0',
            nombre: "Joker",
            nombre_clave: "Joker",
            casa: "DC",
            anio_aparicion: 1940,
            descripcion_resumen: "Príncipe payaso del crimen de Gotham.",
            descripcion_full: "El Joker es el archienemigo de Batman, conocido por su mente criminal caótica y sus actos de violencia extrema, siempre con un toque de humor macabro."
        },
        {
            imagen: 'https://th.bing.com/th/id/OIP.a2M9feHzimehUKcETBHoNQHaLV?cb=iwp1&rs=1&pid=ImgDetMain',
            nombre: "Black Widow",
            nombre_clave: "Black Widow",
            casa: "Marvel",
            anio_aparicion: 1964,
            descripcion_resumen: "Espía rusa experta en combate cuerpo a cuerpo.",
            descripcion_full: "Natasha Romanoff es una agente de S.H.I.E.L.D. y miembro de los Vengadores. Su pasado como espía la hace una luchadora letal con habilidades de infiltración."
        },
        {
            imagen: 'https://th.bing.com/th/id/OIP.COdzQ-tN6J3uUX5LVsdhBQHaJ4?cb=iwp1&rs=1&pid=ImgDetMain',
            nombre: "Harley Quinn",
            nombre_clave: "Harley Quinn",
            casa: "DC",
            anio_aparicion: 1992,
            descripcion_resumen: "Ex-psiquiatra convertida en villana caótica.",
            descripcion_full: "Harleen Quinzel, antes doctora en Arkham, se enamoró del Joker y adoptó una vida criminal. Es impredecible, audaz y a veces actúa como antiheroína."
        },
        {
            imagen: 'https://th.bing.com/th/id/OIP.Iw7zg_RCgI54F9KLgpptUAHaLP?cb=iwp1&rs=1&pid=ImgDetMain',
            nombre: "Thanos",
            nombre_clave: "Thanos",
            casa: "Marvel",
            anio_aparicion: 1973,
            descripcion_resumen: "Titán loco obsesionado con el equilibrio universal.",
            descripcion_full: "Thanos es uno de los villanos más poderosos del universo Marvel. Busca las Gemas del Infinito para borrar la mitad de la vida y así restaurar el equilibrio del universo."
        },
        {
            imagen: 'https://2.bp.blogspot.com/-3bHQ9Gs8WUc/VswhfIH5pQI/AAAAAAAATRk/2103Fg4yAVg/s0-Ic42/RCO010.jpg',
            nombre: "Iron Man",
            nombre_clave: "Iron Man",
            casa: "Marvel",
            anio_aparicion: 1963,
            descripcion_resumen: "Millonario filántropo en una armadura de alta tecnología.",
            descripcion_full: "Tony Stark es un genio inventor y empresario que, tras una experiencia cercana a la muerte, crea una armadura para salvar su vida y convertirse en Iron Man. Es uno de los pilares de los Vengadores."
        },
        {
            imagen: 'https://th.bing.com/th/id/OIP.DJisfTD-OfsmZwEgJUoVPgHaLP?cb=iwp1&rs=1&pid=ImgDetMain',
            nombre: "Batman",
            nombre_clave: "Batman",
            casa: "DC",
            anio_aparicion: 1939,
            descripcion_resumen: "Vigilante de Gotham motivado por la venganza y la justicia.",
            descripcion_full: "Bruce Wayne, tras presenciar el asesinato de sus padres, se entrena al máximo para combatir el crimen en Gotham como el Caballero Oscuro."
        },
        {
            imagen: 'https://th.bing.com/th/id/OIP.PcrjAuAlxAEYx-gOgmY3UwHaLc?cb=iwp1&w=1280&h=1979&rs=1&pid=ImgDetMain',
            nombre: "Captain America",
            nombre_clave: "Captain America",
            casa: "Marvel",
            anio_aparicion: 1941,
            descripcion_resumen: "Súper soldado patriótico defensor de la libertad.",
            descripcion_full: "Steve Rogers fue transformado en el Capitán América gracias a un suero experimental. Es un líder nato y uno de los superhéroes más honorables del universo Marvel."
        },
        {
            imagen: 'https://th.bing.com/th/id/R.b2b65e0563eea16323b1e34d221c0206?rik=Ya6HUkO4EsB%2bFQ&pid=ImgRaw&r=0',
            nombre: "Wonder Woman",
            nombre_clave: "Wonder Woman",
            casa: "DC",
            anio_aparicion: 1941,
            descripcion_resumen: "Princesa amazona y guerrera por la paz.",
            descripcion_full: "Diana de Themyscira es una semidiosa amazona con habilidades sobrehumanas, entrenada en combate y dedicada a defender la humanidad del mal."
        },
        {
            imagen: 'https://th.bing.com/th/id/OIP.xYo6s_ryRDn9jOldJ-klRQHaLd?cb=iwp1&rs=1&pid=ImgDetMain',
            nombre: "Spider-Man",
            nombre_clave: "Spider-Man",
            casa: "Marvel",
            anio_aparicion: 1962,
            descripcion_resumen: "Adolescente con poderes arácnidos tras la picadura de una araña.",
            descripcion_full: "Peter Parker se convierte en Spider-Man y lucha contra el crimen en Nueva York, enfrentando los desafíos de su doble vida con el lema: 'Un gran poder conlleva una gran responsabilidad'."
        },
        {
            imagen: 'https://i.pinimg.com/736x/6d/ee/54/6dee5468061ef77fbf1f374c3b17562c.jpg',
            nombre: "Flash",
            nombre_clave: "Flash",
            casa: "DC",
            anio_aparicion: 1956,
            descripcion_resumen: "El hombre más rápido del mundo.",
            descripcion_full: "Barry Allen, tras un accidente de laboratorio, obtiene súper velocidad y se convierte en Flash. Usa su poder para combatir el crimen y proteger el flujo del tiempo."
        },
        {
            imagen: 'https://th.bing.com/th/id/R.4103fa80fa9e317f84e04bb1c97263d9?rik=jGc%2fHG5RckCDsQ&pid=ImgRaw&r=0',
            nombre: "Doctor Strange",
            nombre_clave: "Doctor Strange",
            casa: "Marvel",
            anio_aparicion: 1963,
            descripcion_resumen: "Hechicero supremo y defensor de las artes místicas.",
            descripcion_full: "Stephen Strange era un neurocirujano que, tras un accidente, aprendió las artes místicas y se convirtió en el principal protector del plano mágico en la Tierra."
        },
        {
            imagen: 'https://th.bing.com/th/id/OIP._GYIDzq72VolxGztzoiMbAHaLY?cb=iwp1&rs=1&pid=ImgDetMain',
            nombre: "Superman",
            nombre_clave: "Superman",
            casa: "DC",
            anio_aparicion: 1938,
            descripcion_resumen: "Hombre de acero con poderes alienígenas y corazón humano.",
            descripcion_full: "Nacido en Krypton como Kal-El, Superman protege la Tierra con su fuerza, vuelo y visión láser. Es símbolo de esperanza y justicia."
        },
        {
            imagen: 'https://th.bing.com/th/id/OIP.QFTtPsooMw3fcrNKeBh5qgHaJ3?cb=iwp1&rs=1&pid=ImgDetMain',
            nombre: "Deadpool",
            nombre_clave: "Deadpool",
            casa: "Marvel",
            anio_aparicion: 1991,
            descripcion_resumen: "Mercenario regenerativo con humor irreverente.",
            descripcion_full: "Wade Wilson es un mercenario con habilidades de regeneración extrema. Es conocido por romper la cuarta pared y mezclar violencia con comedia."
        },
        {
            imagen: 'https://th.bing.com/th/id/OIP.Ytm2YhIlZWcCef5xT06fggHaLQ?cb=iwp1&rs=1&pid=ImgDetMain',
            nombre: "Green Lantern",
            nombre_clave: "Green Lantern",
            casa: "DC",
            anio_aparicion: 1940,
            descripcion_resumen: "Portador de un anillo de poder basado en la voluntad.",
            descripcion_full: "Hal Jordan es un piloto de pruebas elegido por los Guardianes del Universo para portar un anillo de poder y defender el cosmos como miembro de los Green Lantern Corps."
        }
    ]
};
    
personajes.lista.forEach(personaje => {
    const tarjeta = document.createElement('tarjeta-personaje');
    tarjeta.data = {
    nombre: personaje.nombre,
    nombreClave: personaje.nombre_clave,
    casa: personaje.casa,
    anio: personaje.anio_aparicion,
    descripcion: personaje.descripcion_resumen,
    descripcion_full: personaje.descripcion_full,
    foto: personaje.imagen,
    };
    document.getElementById('contenedor').appendChild(tarjeta);
});
const inputBusqueda = document.getElementById("busqueda");
const contenedor = document.getElementById("contenedor");

function renderizarFiltrados(texto) {
contenedor.innerHTML = "";
const filtrados = personajes.lista.filter(personaje => 
    personaje.nombre.toLowerCase().includes(texto.toLowerCase()) ||
    personaje.nombre_clave.toLowerCase().includes(texto.toLowerCase()) ||
    personaje.casa.toLowerCase().includes(texto.toLowerCase())
);
filtrados.forEach(personaje => {
    const tarjeta = document.createElement("tarjeta-personaje");
    tarjeta.data = {
        nombre: personaje.nombre,
        nombreClave: personaje.nombre_clave,
        casa: personaje.casa,
        anio: personaje.anio_aparicion,
        descripcion: personaje.descripcion_resumen,
        descripcion_full: personaje.descripcion_full,
        foto: personaje.imagen,
    };
    contenedor.appendChild(tarjeta);
  });
}
inputBusqueda.addEventListener("input", (e) => {
  renderizarFiltrados(e.target.value);
});


