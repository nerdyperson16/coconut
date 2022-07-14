// Resources used for the Coconut website; reference only: https://www.peachpit.com/articles/article.aspx?p=2239154&seqNum=10

window.onload = choose;

var coconuts = new Array("images/Coconut.png", "images/Logo.png");

function choose() {
    var random = Math.floor(Math.random() * coconuts.length);
    document.getElementById("main_picture").src = coconuts[random];
}