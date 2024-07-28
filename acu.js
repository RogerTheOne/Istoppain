document.addEventListener("DOMContentLoaded", function() {
    var toggleView = document.getElementById("acu-toggle-view");
    var hiddenContent = document.getElementById("acu-hidden-content");
    var toggleIcon = document.querySelector(".toggle-icon");

    toggleView.addEventListener("click", function() {
        if (hiddenContent.style.display === "none" || hiddenContent.style.display === "") {
            hiddenContent.style.display = "block";
            toggleIcon.textContent = "➕";
        } else {
            hiddenContent.style.display = "none";
            toggleIcon.textContent = "➕";
        }
    });
});
