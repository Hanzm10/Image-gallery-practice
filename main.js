const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ["images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg", "images/pic4.jpg", "images/pic5.jpg"];
/* Declaring the alternative text for each image file */
const altTxt = ["Closeup of a human eye", "Wavy stone", "Violet flowers", "Egyptian Art", "Butterfly"];
/* Looping through images */
for (let i = 0; i < images.length; i++) {
    let image = document.createElement("img");
    image.src = images[i];
    image.alt = altTxt[i];
    thumbBar.appendChild(image);
}

thumbBar.addEventListener("click", (e) => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
})

const newImage = document.createElement('img');


/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
    if (btn.getAttribute("class") === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
})