const gameContainer = document.querySelector(".container"),
userResult = document.querySelector(".user-result img"),
cpuResult = document.querySelector(".cpu-result img"),
result = document.querySelector("result"),
optionImages = document.querySelectorAll("option-image");

optionImages.forEach((image, index) => {
    image.addEventListener("click", () => {
        image.classList.add("active");
        /*console.log(image.onclick=("click", () => {
            image.classList.add("active")}));*/
    });
});