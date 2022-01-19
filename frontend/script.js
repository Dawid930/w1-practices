/* const data = [
    "Gergely Kis",
    "Krisztian Bui",
    "Buczko Balazs",
    "Andras Varga",
    "Barbala Terez Kovacs"
];
 */

const data = [
    {
        name: "Gergely Kis",
        favouriteFood: "csirke/rizs"
    },
    {
        name: "Andras Varga",
        favouriteFood: "brassoi"
    },
    {
        name: "Buczko Balazs",
        favouriteFood: "kolbászos rájás pizza"
    },
    {
        name: "Krisztian Bui",
        favouriteFood: "banan"
    },
    {
        name: "Barbala Terez Kovacs",
        favouriteFood: "avokado"
    },
    {
        name: "Benett Viszokai",
        favouriteFood: "alma"
    },
    {
        name: "Krisztian Porneczi",
        favouriteFood: "almas pite"
    },
]
function loadEvent() {
    console.log("Az oldal betoltodott");

    const root = document.querySelector("#root")

    for (const frontendStudent of data) {
        root.insertAdjacentHTML("beforeend", `
            <section>
                <h1>${frontendStudent.name}</h1>
                <p>${frontendStudent.favouriteFood}</p>
            </section>
        `)
    }
}
window.addEventListener("load", loadEvent);
