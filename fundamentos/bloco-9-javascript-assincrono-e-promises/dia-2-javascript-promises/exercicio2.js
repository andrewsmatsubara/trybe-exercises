const funcao = () => {
    const arr = [];

    const promise = new Promise((resolve, reject) => {
        for (let i = 0; i < 10; i += 1) {
            const randomNum = Math.abs(Math.ceil(Math.random() * (50 - 1) + 1))

            arr[i] = randomNum;
        }
        const somaArr = arr.reduce((acc, curr) => acc + curr, 0);

        (somaArr < 8000) ? resolve() : reject();
    });

    promise
        .then = () => console.log('Promise resolvida')
            .catch = () => console.log('Promise rejeitada')
}
