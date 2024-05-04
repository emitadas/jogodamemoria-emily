const container = document.querySelector(".container");
const botaoRecomecar = document.querySelector("button");
let cartas;
let carta01 = "";
let carta02 = "";

botaoRecomecar.addEventListener("click", () => location.reload());

let items = [
    { nome: "biscoito", imagem: "/jogo/fotos2/biscoito.jpg" },
    { nome: "burro", imagem: "/jogo/fotos2/burro.jpg" },
    { nome: "dragoa", imagem: "/jogo/fotos2/dragoa.jpg" },
    { nome: "farquaad", imagem: "/jogo/fotos2/farquaad.jpg" },
    { nome: "fiona", imagem: "/jogo/fotos2/fiona.jpg" },
    { nome: "gato", imagem: "/jogo/fotos2/gato.jpg" },
    { nome: "pinoquio", imagem: "/jogo/fotos2/pinoquio.jpg" },
    { nome: "shrek", imagem: "/jogo/fotos2/shrek.jpg" },
];

botaoRecomecar.addEventListener("click", () => location.reload()); 

function criarCarta() {
    let itemsDuplicado = [...items, ...items];

    //organiza
    let animais = itemsDuplicado.sort(()=> Math.random() - 0.5)
    
    animais.map((animal) => {
        container.innerHTML += `
        <div class="carta" data-carta=${animal.nome}>
        <div class="atras">?</div>
        <div class="frente">
          <img src=${animal.imagem} width="120px" height="120px" />
        </div>`;
      });
    }
    criarCarta();

function cartaVirada(){
    cartas = document.querySelectorAll(".carta")
    console.log(cartas);

    cartas.forEach(carta => {
        carta.addEventListener("click", () => {
            if (carta01 == "") {
                carta.classList.add("carta-virada");
                carta01 = carta;
            }else if(carta02 == ""){
                carta.classList.add("carta-virada");
                carta02 = carta;
                checarCarta()
            }
        })
    })
}
cartaVirada()

function checarCarta(){
    const personagem01 = carta01.getAttribute("data-carta")
    const personagem02 = carta02.getAttribute("data-carta")
     if(personagem01 == personagem02){
        carta01 = "";
        carta02 = "";
     }else{
        setTimeout(() => {
        carta01.classList.remove("carta-virada");
        carta02.classList.remove("carta-virada");

        carta01 = "";
        carta02 = "";
        }, 500);
     }
}