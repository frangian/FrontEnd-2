let getCountriesPromise = new Promise((resolve) => {
    setTimeout(() => {
        let list = ["Argentina", "Chile", "Uruguay", "Brasil", "Venezuela", "Colombia", "Paraguay", "Bolivia", "Ecuador", "Peru"];
        resolve({ list });
    }, 2500);
});