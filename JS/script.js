var rotate = [0, 270, 90, 180];
var currentRotation = 0;
var text = [
    "Buah mangga diblend dengan gula & susu, dengan toping potongan buah, whipcream dan keju",
    "Buah alpukat diblend dengan gula & susu dengan toping potongan buah, whipcream dan keju",
    "Buah strawberry diblend dengan gula & susu, dengan toping potongan buah, whipcream dan keju",
    "Campuran coklat bubuk pilihan dengan susu kental manis dan gula dengan toping oreo, whipcream dan keju"
];
var judul = ["Mango Thai", "Avocado Smoothies", "Strawberry Smoothies", "Ice Chocoblend With Oreo"];

document.addEventListener("DOMContentLoaded", function () {
    const preview = document.querySelector("img[name='preview']");
    const leftButton = document.getElementById("left");
    const rightButton = document.getElementById("right");

    if (leftButton && rightButton && preview) {
        leftButton.addEventListener("click", function () {
            imageIndex--;
            if (imageIndex < 0) imageIndex = image.length - 1;
            preview.src = image[imageIndex];
        });

        rightButton.addEventListener("click", function () {
            imageIndex++;
            if (imageIndex >= image.length) imageIndex = 0;
            preview.src = image[imageIndex];
        });
    }

    document.getElementById("mango")?.addEventListener("click", function () {
        currentRotation = (currentRotation + 1) % rotate.length;
        document.querySelector(".roll")?.style.setProperty("transform", `rotate(${rotate[0]}deg)`);
        document.querySelector(".content p").innerText = text[0];
        document.querySelector(".content h3").innerText = judul[0];
    });

    document.getElementById("avocado")?.addEventListener("click", function () {
        currentRotation = (currentRotation + 1) % rotate.length;
        document.querySelector(".roll")?.style.setProperty("transform", `rotate(${rotate[1]}deg)`);
        document.querySelector(".content p").innerText = text[1];
        document.querySelector(".content h3").innerText = judul[1];
    });

    document.getElementById("berry")?.addEventListener("click", function () {
        currentRotation = (currentRotation + 1) % rotate.length;
        document.querySelector(".roll")?.style.setProperty("transform", `rotate(${rotate[2]}deg)`);
        document.querySelector(".content p").innerText = text[2];
        document.querySelector(".content h3").innerText = judul[2];
    });

    document.getElementById("oreo")?.addEventListener("click", function () {
        currentRotation = (currentRotation + 1) % rotate.length;
        document.querySelector(".roll")?.style.setProperty("transform", `rotate(${rotate[3]}deg)`);
        document.querySelector(".content p").innerText = text[3];
        document.querySelector(".content h3").innerText = judul[3];
    });
});

var image = [
    "resource/Frame 15.png",
    "resource/Frame 15 (1).png",
    "resource/Frame 15 (2).png"
];
var imageIndex = 0;
