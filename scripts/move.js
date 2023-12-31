function moveNoButton() {
   

    // Mueve el botón "No" a la posición aleatoria
    let noButton = document.getElementById("noButton");
    noButton.mousemove = () => {mover(noButton)}
    function mover(btn){
         // Genera una posición aleatoria en la pantalla
    let randomX = Math.floor(Math.random() * window.innerWidth);
    let randomY = Math.floor(Math.random() * window.innerHeight);
    btn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }
    
}