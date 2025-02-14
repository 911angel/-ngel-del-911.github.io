// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Muñequita linda", time: 19 },
  { text: "De cabellos de oro", time: 25 },
  { text: "De dientes de perlas", time: 31 },
  { text: "Labios de rubí", time: 36 },
  { text: "Dime si me quieres", time: 41 },
  { text: "Como yo te adoro", time: 46 },
  { text: "Si de mí te acuerdas", time: 51 },
  { text: "Como yo de ti", time: 56 },
  { text: "Y a veces escucho", time: 62 },
  { text: "Un eco divino", time: 67 },
  { text: "Que envuelto en la brisa", time: 71 },
  { text: "Parece decir", time: 76 },
  { text: "Sí, te quiero mucho", time: 81 },
  { text: "Mucho, mucho, mucho", time: 86 },
  { text: "Tanto como entonces", time: 91 },
  { text: "Siempre hasta morir", time: 97 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);