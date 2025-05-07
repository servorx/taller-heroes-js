# HeroFinder - Aplicación Web de Búsqueda de Superhéroes

## Descripción del Proyecto

**HeroFinder** es una aplicación web interactiva construida con JavaScript que permite buscar superhéroes de los universos Marvel y DC. La aplicación está compuesta por una barra de búsqueda y una galería de tarjetas informativas de personajes. Cada tarjeta ofrece información básica y un botón para desplegar un modal con detalles adicionales.

---

## Funcionalidades Principales

- 🔍 **Barra de Búsqueda**:
  - Permite buscar personajes por su **nombre clave**.
  - Muestra un mensaje indicando el personaje ingresado por el usuario.
  - Filtro dinámico en tiempo real.

- 🧩 **Tarjeta del Personaje**:
  - Nombre del personaje.
  - Imagen representativa.
  - Nombre clave.
  - Universo: Marvel o DC.
  - Año de aparición.
  - Descripción breve.
  - Botón "Ver más" que despliega un modal con:
    - Imagen ampliada.
    - Descripción completa del personaje.

- 📦 **Carga Automática de Información**:
  - Los datos de los personajes se cargan automáticamente desde un archivo `data.json`.

- 🧠 **Uso de Objetos Literales**:
  - Cada personaje es representado como un objeto literal con las siguientes propiedades:
    ```js
    {
      nombre: "Bruce Wayne",
      nombreClave: "Batman",
      universo: "DC",
      año: 1939,
      descripcionResumida: "Un vigilante enmascarado que protege Gotham.",
      descripcionCompleta: "Bruce Wayne, también conocido como Batman, es un multimillonario filántropo que combate el crimen..."
    }
    ```

- 📱 **Diseño Responsivo**:
  - Compatible con dispositivos móviles, tablets y escritorios.
  - Uso de Flexbox y/o Grid para una mejor disposición visual.

- 💾 **Almacenamiento con JSON**:
  - Los datos de los personajes se almacenan y gestionan a través de archivos JSON para facilitar su edición y mantenimiento.

---

## Requisitos Técnicos

- ✅ JavaScript (vanilla, sin frameworks obligatorios).
- ✅ HTML5 y CSS3 
- ✅ Uso de objetos literales para la estructura de datos.
- ✅ Implementación de modal para visualización ampliada.
- ✅ Barra de búsqueda funcional.
- ✅ Carga dinámica de datos desde un archivo `data.json`.
- ✅ Diseño responsivo.


