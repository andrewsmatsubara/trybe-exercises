const funcao = () => {
    const arr = [];

    const promise = new Promise((resolve, reject) => {
        for (let i = 0; i < 10; i += 1) {
            const randomNum = Math.pow(Math.ceil(Math.random() * (50 - 1) + 1), 2);

            arr[i] = randomNum;
        }
        const somaArr = arr.reduce((acc, curr) => acc + curr, 0);

        (somaArr < 8000) ? resolve() : reject();
    });

    promise
        .then(somaArr => [2, 3, 5, 10].map(numero => somaArr / numero))
        .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
}
funcao();