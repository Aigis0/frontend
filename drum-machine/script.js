function playAudio(id) {
    console.log(id);
    const audio = document.getElementById('audio-' + id);
    if (audio) {
        audio.currentTime = 0;
        audio.play();
    }
} 
document.getElementById("heater-1").addEventListener('click', () => playAudio("heater-1"))
document.getElementById("heater-2").addEventListener('click', () => playAudio("heater-2"));
document.getElementById("heater-3").addEventListener('click', () => playAudio("heater-3"));
document.getElementById("heater-4").addEventListener('click', () => playAudio("heater-4"));
document.getElementById("heater-5").addEventListener('click', () => playAudio("heater-5"));
document.getElementById("heater-6").addEventListener('click', () => playAudio("heater-6"));
document.getElementById("heater-7").addEventListener('click', () => playAudio("heater-7"));
document.getElementById("heater-8").addEventListener('click', () => playAudio("heater-8"));
document.getElementById("heater-9").addEventListener('click', () => playAudio("heater-9"));