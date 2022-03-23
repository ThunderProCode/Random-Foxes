import { registerImage } from "./lazyload";

const imagesNode = document.getElementById('images');
const addButton = document.getElementById('add-image');
const clearButton = document.getElementById('clear-images');

const baseUrl = "https://randomfox.ca/images/";
const api = "https://randomfox.ca/floof/";

const addImage = async () => {

    const response = await fetch(api);
    const responseJSON = await response.json();
    const url = responseJSON.image;

    const imageContainer = document.createElement('div');
    imageContainer.className = "p-4";
   
    const image = document.createElement('img');
    image.className = "mx-auto";
    image.width = "320";
    image.src = "https://ak.picdn.net/shutterstock/videos/10739120/thumb/1.jpg";
    image.dataset.src = url;
    imageContainer.append(image);
    
    imagesNode.append(imageContainer);
    registerImage(imageContainer);
}

const clearImages = () => {
    imagesNode.innerHTML = "";
}

addButton.addEventListener("click",addImage);
clearButton.addEventListener("click", clearImages);