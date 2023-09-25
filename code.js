// Constantes
const pianoKeys = document.querySelectorAll(".piano-keys .key"),
  volumeSlider = document.querySelector(".volume-slider input"),
  keysCheckbox = document.querySelector(".keys-checkbox input");

// Variables
let allKeys = [], audio = new Audio(`tunes/a.wav`);

// Buscar los audios en la carpeta
const playTune = (key) => {
    audio.src = `tunes/${key}.wav`;
    audio.play();

    const clikedKey = document.querySelector(`[data-key="${key}"]`); // Tecla presionada
    clikedKey.classList.add("active");

    setTimeout(() => {
        clikedKey.classList.remove("active");
    }, 150)
};

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key); // Metiendo todas teclas en el array

    key.addEventListener("click", () => playTune(key.dataset.key)); // Evento al presionar la tecla.
})

// Controlar el volumen de nuestro piano
const handleVolume = (e) => {
    audio.volume = e.target.value;
};

// Mostrar las letras en cada tecla de nuestro piano
const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
};

// Controlar que tecla ha sido presionada
const pressedKey = (e) => {
    if(allKeys.includes(e.key)) playTune(e.key)
};


// Pasando los eventos.
keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);
