

async function iterateWithAsyncAwait(values) {
    for (let value of values) {
        console.log(value);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

async function awaitCall() {
    try {
        const response = await fakeApiCall();
        console.log(response);
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
    }
}

// Simulation d'un appel API
function fakeApiCall() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Données récupérées de l'API");
        }, 2000);
    });
}

async function awaitCall() {
    try {
        const response = await fakeApiCall();
        console.log(response);
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error.message);
    }
}

// Simulation d'un appel API avec possibilité d'erreur
function fakeApiCall() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;
            if (success) {
                resolve("Données récupérées de l'API");
            } else {
                reject(new Error("Échec de l'appel API"));
            }
        }, 2000);
    });
}


async function firstAsyncFunction() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Première fonction terminée");
}

async function secondAsyncFunction() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Deuxième fonction terminée");
}

async function thirdAsyncFunction() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Troisième fonction terminée");
}

async function chainedAsyncFunctions() {
    await firstAsyncFunction();
    await secondAsyncFunction();
    await thirdAsyncFunction();
}



async function parallelCalls(urls) {
    try {
        const promises = urls.map(url => fetch(url).then(response => response.json()));
        const results = await Promise.all(promises);
        console.log(results);
    } catch (error) {
        console.error('Erreur lors des appels parallèles:', error);
    }
}



