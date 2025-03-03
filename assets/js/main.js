// Select the DOM elements
const containerEl = document.querySelector(".container");
const rowEl = document.querySelector(".row");
const imageUrl = "https://lanciweb.github.io/demo/api/pictures/";
const overlayEl = document.querySelector(".overlay-ds");
const overlayImg = document.querySelector("#overlay-img");
const closeBtn = document.querySelector("#close-btn");

// Fetch the images from the API
fetch(imageUrl)
.then((response) => response.json())
.then((imageArr) => {
    console.log(imageArr);

    // Loop through the image array and add the images to the gallery
    imageArr.forEach((cardImg) => {
        rowEl.insertAdjacentHTML(
            "beforeend",
            `
            <div class="col-12 col-md-6 col-lg-4 mb-3">
                <div class="card p-4 mb-5 m-auto">
                    <img src="./assets/assets_day1/img/pin.svg" 
                        class="position-absolute top-0 start-50 translate-middle" 
                        alt>
                    <!-- Add data-url to store the image URL for overlay -->
                    <img src="${cardImg.url}" class="card-img" alt="" data-url="${cardImg.url}">
                    <div class="card-body mt-2">
                        <p class="text-muted card-date">${cardImg.date}</p>
                        <h5 class="fw-bold card-title">${cardImg.title}</h5>
                    </div>
                </div>
            </div>
            `
        );
    });

    // Add click event to each image to show the overlay
    const images = document.querySelectorAll(".card-img");
    images.forEach((img) => {
        img.addEventListener("click", function () {
            // Show overlay and display clicked image
            overlayImg.src = img.getAttribute("data-url");
            overlayEl.style.display = "flex";
        });
    });

    // Close overlay when clicking the close button
    closeBtn.addEventListener("click", function () {
        overlayEl.style.display = "none";
    });
})
.catch((error) => console.error(error));
