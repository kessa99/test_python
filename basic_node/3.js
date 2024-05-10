// module qui permet a l'utilisateur de saisir du texte
const readline = require('readline')

// creer une interface pour lire les lignes
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// fonction qui permet de demarrer le programme
const demarrerProgramme = () => {
    // creation d'une constance qui contiendra la fonction
    const lirePrenom = prenom => {
        console.log('Ton prenom est ' + prenom)
        rl.close()
    }

    // appel de la function dans leau niveau de la demande
    rl.question('quel est ton prenom? ', lirePrenom)
}

demarrerProgramme()