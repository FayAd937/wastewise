const fileInput = document.getElementById("uploadFile");
const uploadBtn = document.getElementById("uploadBtn");

uploadBtn.addEventListener("click", function () {
    fileInput.click(); // ini yang bikin button bisa buka file picker
});