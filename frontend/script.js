function loadEvent() {
    console.log("Az oldal betoltodott");

    const list = document.querySelectorAll("section");

    for (const elem of list) {
        elem.insertAdjacentHTML("beforeend", ` 
        <p>text</p>
        `);
        //elem.querySelector("p").style.fontFamily = `'Poppins', sans-serif`;
        //elem.querySelector("h1").outerHTML = ""
    }
}
window.addEventListener("load", loadEvent);
