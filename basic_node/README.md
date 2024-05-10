# Fonction Ou Operatiion Syncrone

```
Une opération synchrone est une opération où le résultat est disponible immédiatement après son exécution. Cela signifie que le programme attend que cette opération soit terminée avant de passer à la suivante, ce qui peut rendre le programme plus simple à raisonner car les actions se déroulent dans un ordre séquentiel et prévisible.
```

1-voici un exemple basic:

```javascript
// nom du fichier 0.js

const x = 10
const y = 20

if (x > 1) {
    console.log('x is greater than 1')
}

if (y > 1) {
    console.log('y is greater than 1')
}

const total = x + y
console.log('The total is:', total)
```

2- Compliler avec:

```
node 0.js
```

3- Resultat:

```
x is greater than 1
y is greater than 1
The total is: 30
```

# Function Ou Operation Asynchrone

## I- Verion 1: Sipmple saisie

**1- definition**


```
Une opération asynchrone est une action qui ne se déroule pas immédiatement au moment où elle est appelée. Au lieu de cela, elle est placée dans une file d'attente et est traitée ultérieurement, tandis que le programme principal continue son exécution.
```

**2- Pourquoi est-ce important ?**

```
Parce que dans de nombreux cas, les opérations asynchrones prennent du temps pour s'exécuter, comme l'accès à une base de données, le téléchargement de fichiers sur Internet, ou même simplement le traitement de données complexes. Au lieu de bloquer le programme principal pendant cette attente, le programme peut continuer à exécuter d'autres tâches. Une fois que l'opération asynchrone est terminée, elle peut déclencher une action spécifique, comme l'exécution d'une fonction de rappel (callback) ou la résolution d'une promesse, pour traiter les résultats ou les erreurs.
```

**3- En resume**

```
les opérations asynchrones permettent à un programme de continuer à fonctionner efficacement en traitant des tâches en arrière-plan pendant que d'autres tâches sont en cours d'exécution, ce qui améliore la réactivité et les performances de l'application.
```

* source:
    - [Geeks](https://www.geeksforgeeks.org/node-js-readline-module/)
    - [Programmation asynchrone en JavaScript: Événements, Callbacks, Promises, async-await](https://www.youtube.com/watch?v=nf0FvGwAQBg&t=1133s)


**4- code**
```javascript
// fichier 1.js
// module qui permet a l'utilisateur de saisir du texte en le chargant avec 'require'
const readline = require('readline')

// creer une interface pour lire les lignes en l'initialisant
const rl = readline.createInterface({
    // entre le clavier
    input: process.stdin,

    // sortie l'ecran
    output: process.stdout,
})

// fonction qui permet de demarrer le programme
const demarrerProgramme = () => {
    // demander a l'utilisateur son prenom en utilisant la fonction 'question'
    rl.question('quel est ton prenom? ', reponse => {
        console.log('Ton prenon est: ' + reponse)
        rl.close()
    })
}
demarrerProgramme()
```

**5- Reponse**
```
quel est ton prenon?
```
* Note:

```
Ici on a l'impression que la fonction est arreter car le programme attend une reponse en l'ocurrence Le nom. La realite c'est que ce n'est pas le cas. EN faite le programme a continuer de fonctionner, il n'attend juste pas la reponse
```

* Affichage quand on donne un reponse
```
quel est ton prenom? David
Ton prenon est: David
```
```
Nous pouvons voir que la function 'qestion prend le nom mais aussi un CALLBACK. En effet un callback est une fonction qui fonction une fois que la reponse est prête.'
```
* Verifions que le programme a bien executer tout jusqu'a la fin

```javascript
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
    console.log('Fin du programme pour signifier que tout le programme est excecuter jusqu\'a la fin')
}

demarrerProgramme()
```
* Reponse:
quel est ton prenom? <font color="yellow">Fin du programme pour signifier que tout le programme est exécuté jusqu'à la fin</font>

```
Tout ceci pour montrer que le programme est excecute de maniere sequentielle en entier, la reponse ne sera donne que par la suite que l'utilisateur ura saisie un element de reponse
```

* reponse apres saisie
```
quel est ton prenom? Fin du programme pour signifier que tout le programme est excecuter jusqu'a la fin
david
Ton prenon est: david
```

## I- Verion 2: Ajouter la saisie du nom  apres celle du prenom

```
De maniere simple ou dirait on logique on ajouterais la seconde partie pour la saisie du nom a la suite comme ceci:
```
```javascript
// Fichier 2.js
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
    })

    rl.question('quel est ton nom? ', reponse => {
        console.log('Ton nom est: ' + reponse)
    })
}

demarrerProgramme()
```
* Reponse
```
quel est ton prenom? david
Ton prenon est: david
```

* Note
```
Ici le programme s'est arreter pour cause de bug. et ne fournit plus la suite du programme car c'est comme demander a l'utilisteur de saisir 2 element a la fois ce qui n'est pas possible. Ce que l'on faire serait de de mettre le second code des saisie dans le callback du premier
```

```javascript
// Fichier 2.js
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
            console.log('Ton nom complet est: ' + prenom + ' ' + nom)
            rl.close()
        })
    })
}

demarrerProgramme()
```
```javascript
titodevops@attito:~/Bureau/Boulot/test_python/basic_node$ node 2.js 
quel est ton prenom? David
Ton prenon est: David
quel est ton nom? KIPRE
Ton nom est: KIPRE
Ton nom complet est: David KIPRE
titodevops@attito:~/Bureau/Boulot/test_python/basic_node$ 
```
### Ajoutons l'age


```javascript
// Fichier 2.js
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
```

```javascript
titodevops@attito:~/Bureau/Boulot/test_python/basic_node$ node 2.js 
quel est ton prenom? David
Ton prenon est: David
quel est ton nom? KIPRE
Ton nom est: KIPRE
quel est alors votre age? 26
Vous avez 26ans
KIPRE David 26 ans
titodevops@attito:~/Bureau/Boulot/test_python/basic_node$ 
```

* Note
```
De maniere generale le code fonctionne mais il est long et illisible pour la plupart. Il nous faut donc trouver un moyer de pouvoir le rendre plus lisible plus propre
```

### Ameliorons le programme

```
Le principe est assez complexe ne pas hesiter a le lire avant de continue
```
