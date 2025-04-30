var rotate = [0, 270, 90, 180];
var currentRotation = 0;
var text = [
    "Buah mangga diblend dengan gula & susu, dengan toping potongan buah, whipcream dan keju",
    "Buah alpukat diblend dengan gula & susu dengan toping potongan buah, whipcream dan keju",
    "Buah strawberry diblend dengan gula & susu, dengan toping potongan buah, whipcream dan keju",
    "Campuran coklat bubuk pilihan dengan susu kental manis dan gula dengan toping oreo, whipcream dan keju"
];
var judul = ["Mango Thai", "Avocado Smoothies", "Strawberry Smoothies", "Ice Chocoblend With Oreo"];

document.getElementById("mango").addEventListener("click", function () {
    currentRotation = (currentRotation + 1) % rotate.length;
    document.getElementsByClassName("roll")[0].style.transform = "rotate(" + rotate[0] + "deg)";
    document.querySelector(".content p").innerText = text[0];
    document.querySelector(".content h3").innerText = judul[0];
});

document.getElementById("avocado").addEventListener("click", function () {
    currentRotation = (currentRotation + 1) % rotate.length;
    document.getElementsByClassName("roll")[0].style.transform = "rotate(" + rotate[1] + "deg)";
    document.querySelector(".content p").innerText = text[1];
    document.querySelector(".content h3").innerText = judul[1];
});

document.getElementById("berry").addEventListener("click", function () {
    currentRotation = (currentRotation + 1) % rotate.length;
    document.getElementsByClassName("roll")[0].style.transform = "rotate(" + rotate[2] + "deg)";
    document.querySelector(".content p").innerText = text[2];
    document.querySelector(".content h3").innerText = judul[2];
});

document.getElementById("oreo").addEventListener("click", function () {
    currentRotation = (currentRotation + 1) % rotate.length;
    document.getElementsByClassName("roll")[0].style.transform = "rotate(" + rotate[3] + "deg)";
    document.querySelector(".content p").innerText = text[3];
    document.querySelector(".content h3").innerText = judul[3];
});
