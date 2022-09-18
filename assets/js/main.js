console.log("Entro al main.js");

// const randomImage = () => {
//     console.log("Entró a la función randomImage")

//     fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/mxn.json")
//         // .then((response) => response.json())
//         .then((response) => {
//             return response.json()
//         })
//         .then((data) => console.log(data))
//         .catch((error) => console.log(error));
// }

const url = "https://picsum.photos/200/300";
const imgRandom = document.getElementById('imgRandom');

const randomImage = () => {
    console.log("Entró a la función randomImage");

    fetch(url)
        .then((data) => {
            console.log(data);
            imgRandom.src = data.url;
        })
        .catch((error) => console.log(error));
}