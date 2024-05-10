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
    rl.question('quel est ton prenom? ', prenom => {
        console.log('Ton prenon est: ' + prenom)


        // ajout de la seconde demande dans le callback de la premiere
        rl.question('quel est ton nom? ', nom => {
            console.log('Ton nom est: ' + nom)

            rl.question('quel est alors votre age? ', age => {
                console.log('Vous avez ' + age + 'ans')
                console.log(nom +' '+ prenom +' '+ age +' ans')
                rl.close()
            })
        })
    })
}

demarrerProgramme()