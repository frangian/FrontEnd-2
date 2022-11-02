let getCountriesPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let list = ["Argentina", "Chile", "Uruguay", "Brasil", "Venezuela", "Colombia", "Paraguay", "Bolivia", "Ecuador", "Peru"];
        resolve({ list });
    }, 2500);
});