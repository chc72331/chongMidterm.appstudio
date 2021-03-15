myAnimals = ['dog', 'cat', 'horse', 'meerkat']

userAnimal = prompt('Add an animal!')
smallAnimal = userAnimal.toLowerCase()

myAnimals.push(smallAnimal)

console.log(`The last animal is a/an ${myAnimals[myAnimals.length - 1 ]}.`)