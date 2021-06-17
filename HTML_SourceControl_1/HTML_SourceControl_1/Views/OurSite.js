function showHide(input) {
    var x = document.getElementById(input);
    if (x.style.display !== "none") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}