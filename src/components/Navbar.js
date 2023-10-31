document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    const links = [
        { text: "Inicio", url: "#" },
        { text: "Acerca de", url: "#" },
        { text: "Servicios", url: "#" },
        { text: "Contacto", url: "#" }
    ];
    function createNavbarLink(text, url) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = url;
        a.textContent = text;
        li.appendChild(a);
        navbar.appendChild(li);
    }

    for (const link of links) {
        createNavbarLink(link.text, link.url);
    }
});
// cartwidget.js
(function() {
    const cartWidget = document.createElement("div");
    cartWidget.id = "cart-widget";
    const cartLogo = document.createElement("img");
    cartLogo.src = "carrito.png"; // Ruta de la imagen del carrito
    cartWidget.appendChild(cartLogo);
    document.body.appendChild(cartWidget);
})();
