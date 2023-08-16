  function moveButton() {
    const button = document.getElementById("noButton");
    const maxDistance = 500; // Defina o valor de distância máxima que você deseja

    const maxWidth = window.innerWidth - button.offsetWidth;
    const maxHeight = window.innerHeight - button.offsetHeight;

    const randomX = Math.max(0, Math.min(Math.floor(Math.random() * maxDistance), maxDistance));
    const randomY = Math.max(0, Math.min(Math.floor(Math.random() * maxDistance), maxDistance));

    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
  }

  function showGif() {
    const gifContainer = document.getElementById("gifContainer");
    const funnyGif = document.getElementById("funnyGif");

    gifContainer.style.display = "block"; // Mostra o contêiner de GIF
    funnyGif.style.display = "block"; // Mostra o GIF
  }
