// module qui permet a l'utilisateur de saisir du texte
const readline = require('readline')

// creer une interface pour lire les lignes
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// fonction qui permet de demarrer le programme
const demarrerProgramme = () => {
    // demander a l'utilisateur son prenom
    rl.question('quel est ton prenom? ', reponse => {
        console.log('Ton prenon est: ' + reponse)
        rl.close()
    })
}

demarrerProgramme()