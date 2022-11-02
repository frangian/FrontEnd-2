function getCountriesAsync(callback) {
    setTimeout(() => {
        callback();
        return ["Argentina", "Chile", "Uruguay", "Brasil", "Venezuela", "Colombia", "Paraguay", "Bolivia", "Ecuador", "Peru"];
    }, 1500);
}

function loadAccountStatusAsync(container) {
    setTimeout(() => {
        container.innerHTML += `<li>El saldo de la cuenta es: $${1.400}</li>`;
    }, 3500);
}

function loadInternationalAccountStatusAsync(container) {
    setTimeout(() => {
        container.innerHTML += `<li>El saldo de la cuenta internacional es: U$S${340}</li>`;
    }, 1500);
}

function loadCreditCardStatusAsync(container) {
    setTimeout(() => {
        container.innerHTML += `<li>El vencimiento de tu pago de la tarjeta es en: ${9}dias</li>`;
    }, 700);
}