const emoji = document.querySelector("#emoji");

const emojis = [
  "💀",
  "😊",
  "🤡",
  "🥺",
  "😎",
  "🙈",
  "🥵",
  "🥰",
  "😍",
  "🤓",
  "😘",
];

//crear una funcion que remplace el emoji por otro emoji
//hacer que esa funcion tome como emoji alguno de los que estan en el array emojis

//?hacer que cuando se efectue la funcion eliga entre alguno de los items dentro del arreglo emojis
//!Posibles soluciones
//? 1.-

const changeEmoji = () => {
  const i = Math.floor(Math.random() * emojis.length);
  emoji.textContent = emojis[i];
};

//hacer un eventlistener a el div con el id emoji que al pasar el raton por encima active la funcion cambiar emoji

emoji.addEventListener("mouseover", changeEmoji);
