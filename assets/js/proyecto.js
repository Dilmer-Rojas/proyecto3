let images = Array.from(document.getElementsByClassName("imgCarousel"));

let mainPhoto = document.getElementById("mainPhoto");
let mainName = mainPhoto.getAttribute("name");
let descProyecto = mainPhoto.getAttribute("desc");

updateCaption(mainName);
updateDesc(descProyecto);

images.forEach(function (image) {
    image.addEventListener('click', updateImage);
})

function updateImage(event) {
    let image = event.target;
    let name = image.getAttribute("name");
    let desc = image.getAttribute("desc");
    let botonLink = image.getAttribute("boton-p");
    let hrefLink = image.getAttribute("href");

    mainPhoto.src = image.src;
    updateCaption(name);
    updateDesc(desc);
    updateBoton(botonLink, hrefLink);
}

function updateCaption(event) {
    let caption = document.getElementById("caption");
    caption.innerHTML = event;
}

function updateDesc(event) {
    let proyecto = document.getElementById("proyecto");
    proyecto.innerHTML = event;
}

function updateBoton(text, linkUrl) {
    let botonDiv = document.getElementById("boton");
    let link = botonDiv.querySelector('a');
    
    if (link) {
        link.textContent = text || "";
        link.href = linkUrl || ""; // Actualiza el href del enlace con la URL proporcionada, o lo deja vacío si no hay URL
        link.target = "_blank"; 
    }
}