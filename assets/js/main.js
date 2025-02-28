// Select the dom element
const containerEl = document.querySelector(".container");
const rowEl = document.querySelector(".row");
const imageUrl = "https://lanciweb.github.io/demo/api/pictures/";

// Fetch the image from url

fetch(imageUrl)
.then((response) => response.json())
.then((image) => {
    const imageArr = image;
    console.log(imageArr);

    // Cicle forEach

    imageArr.forEach((cardImg) => {
    rowEl.insertAdjacentHTML(
        "beforeend",
        `
        <div class="col-12 col-md-6 col-lg-4 mb-3">
                        <div class="card p-4 m-auto">
                            <img src="./assets/assets_day1/img/pin.svg"
                                class="position-absolute top-0 start-50 translate-middle"
                                alt>
                            <img src="${cardImg.url}" alt>
                            <div class="card-body mt-2">
                                <p class="text-muted card-date ">${cardImg.date}</p>
                                <h5 class=" fw-bold card-title">${cardImg.title}</h5>
                            </div>
                        </div>
        </div>
        `
    );
    });
})
.catch((error) => console.error(error));
