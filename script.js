document.addEventListener("DOMContentLoaded", function () {
    const booksContainer = document.getElementById("books-container");

    // Datos en formato JSON representando obras literarias de Juan Bosch
    const obrasLiterarias = [
        {
            titulo: "La Mañosa",
            autor: "Juan Bosch",
            generos: ["Cuento", "Ensayo"],
            publicacion: 1935,
            resumen: "Una colección de cuentos y ensayos del reconocido autor dominicano Juan Bosch."
        },
        {
            titulo: "La Fiesta del Chivo",
            autor: "Juan Bosch",
            generos: ["Novela", "Histórica"],
            publicacion: 2000,
            resumen: "Una novela histórica que retrata los últimos días de la dictadura de Rafael Trujillo en la República Dominicana."
        },
        {
            titulo: "Cuentos Escritos Antes del Exilio",
            autor: "Juan Bosch",
            generos: ["Cuento"],
            publicacion: 1934,
            resumen: "Colección de cuentos escritos por Juan Bosch antes de su exilio político."
        },
        {
            titulo: "Trujillo Cusas De Una Tirania",
            autor: "Juan Bosch",
            generos: ["Cuento"],
            publicacion: 2009,
            resumen: "Colección de cuentos escritos por Juan Bosch antes de su exilio político."
        },
        {
            titulo: "La Mujer",
            autor: "Juan Bosch",
            generos: ["Cuento"],
            publicacion: 1932,
            resumen: "Colección de cuentos escritos por Juan Bosch antes de su exilio político."
        },
        {
            titulo: "De Cristobal Colon A Fidel Castro",
            autor: "Juan Bosch",
            generos: ["Cuento"],
            publicacion: 1985,
            resumen: "Colección de cuentos escritos por Juan Bosch antes de su exilio político."
        },
        {
            titulo: "Apuntes Sobre El Arte De Escribir",
            autor: "Juan Bosch",
            generos: ["Cuento"],
            publicacion: 1958,
            resumen: "Colección de cuentos escritos por Juan Bosch antes de su exilio político."
        },
        {
            titulo: "Judas Iscariote el Calumniado",
            autor: "Juan Bosch",
            generos: ["Cuento"],
            publicacion: 1955,
            resumen: "Colección de cuentos escritos por Juan Bosch antes de su exilio político."
        },
        {
            titulo: "Clases Sociales De La Republica Dominicana",
            autor: "Juan Bosch",
            generos: ["Cuento"],
            publicacion: 1974,
            resumen: "Colección de cuentos escritos por Juan Bosch antes de su exilio político."
        }

    ];

    // Mostrar cada obra literaria en el contenedor
    obrasLiterarias.forEach(obra => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");

        const titleHeading = document.createElement("h2");
        titleHeading.textContent = obra.titulo;

        const authorPara = document.createElement("p");
        authorPara.textContent = `Autor: ${obra.autor}`;

        const genresPara = document.createElement("p");
        genresPara.textContent = `Géneros: ${obra.generos.join(", ")}`;

        const yearPara = document.createElement("p");
        yearPara.textContent = `Año de publicación: ${obra.publicacion}`;

        const summaryPara = document.createElement("p");
        summaryPara.textContent = `Resumen: ${obra.resumen}`;

        bookDiv.appendChild(titleHeading);
        bookDiv.appendChild(authorPara);
        bookDiv.appendChild(genresPara);
        bookDiv.appendChild(yearPara);
        bookDiv.appendChild(summaryPara);
        booksContainer.appendChild(bookDiv);
    });
});
