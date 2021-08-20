const Animals = [
    { name: 'Dorminhoco', age: 1, type: 'Dog' },
    { name: 'Soneca', age: 2, type: 'Dog' },
    { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
    // Adicione o código aqui.
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const resultado = Animals.find((animal) => animal.name === name);
            if (resultado) {
                return resolve(resultado);
            }
            return reject(new Error('Nenhum animal com esse nome!'));
        }, 100);
    })
    );

const getAnimal = (name) => {
    // Adicione o código aqui.
    findAnimalByName(name).then(animal => animal);
};
// ---------------------
module.exports = { findAnimalByName, getAnimal };