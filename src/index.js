console.log('Happy hacking :)')

const imagesNode = document.getElementById('images');
const addButton = document.getElementById('add-image');

const baseUrl = "https://randomfox.ca/images/";

addButton.addEventListener("click",addImage);

const createImageNode = () => {
    const imageContainer = document.createElement('div');
    imageContainer.className = "p-4";
    const randomInt = Math.floor(Math.random() * 123)+1;
    const image = document.createElement('img');
    image.className = "mx-auto";
    image.width = "320";
    image.src = `${baseUrl}${randomInt}.jpg`;
    imageContainer.append(image);
    return imageContainer;
}

function addImage() {
    imagesNode.appendChild(createImageNode());
}