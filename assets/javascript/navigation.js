function myFunction() {
    var x = document.getElementById("datnav");
    if (x.className === "disnav") {
        x.className += "responsive";
    } else {
        x.className = "disnav";
    }
}