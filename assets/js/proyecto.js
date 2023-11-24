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
    let desc = image.getAttribute("desc")

    mainPhoto.src = image.src;
    updateCaption(name);
    updateDesc(desc);
}

function updateCaption(event) {
    let caption = document.getElementById("caption");
    caption.innerHTML = event;
}

function updateDesc(event) {
    let proyecto = document.getElementById("proyecto")
    proyecto.innerHTML = event;
}