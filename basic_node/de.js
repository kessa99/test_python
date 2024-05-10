// jouer la bande sonore
const audio = new Audio('audio.mp3');

// quand la bon sonore est charge lancer le son
audio.addEventListener('canplaythrough', () => {
    audio.play();
});

audio.addEventListener('ended', () => {
    // quand le son est fini, lancer le programme


    // recuperer l'image
    const image = document.getElementById('image');

    //ajouter l'attribut src avec le resultat de la fonction getImage
    image.src = 'de' + getImage() + '.svg';
});