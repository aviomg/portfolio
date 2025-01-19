
// List of images in the gallery

const carousels = document.querySelectorAll(".carousel");
carousels.forEach(carousel => {
    let images=JSON.parse(carousel.getAttribute("data-images"));
    let index=0;
   /* let imgElement =document.getElementById("carousel-image");
    let prevButton = document.getElementById("prev");
    let nextButton = document.getElementById("next");*/
    let imgElement = carousel.querySelector(".carousel-image");
    let prevButton = carousel.querySelector(".prev");
    let nextButton = carousel.querySelector(".next");


    function updateImage(){
        imgElement.src = images[index];
    }
    prevButton.addEventListener("click", () => {
        index = (index - 1 + images.length) % images.length; // Wrap around if at start
        updateImage();
    });

    nextButton.addEventListener("click", () => {
        index = (index + 1) % images.length; // Wrap around if at end
        updateImage();
    });
})
/*
const images = ["../assets/crochet/7a.webp", "../assets/crochet/7b.webp", "../assets/crochet/7c.webp"]; // Add more images as needed
let index = 0;

const imgElement = document.getElementById("carousel-image");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

// Function to update the image
function updateImage() {
    imgElement.src = images[index];
}

// Previous button functionality
prevButton.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length; // Wrap around if at start
    updateImage();
});

// Next button functionality
nextButton.addEventListener("click", () => {
    index = (index + 1) % images.length; // Wrap around if at end
    updateImage();
});
*/
