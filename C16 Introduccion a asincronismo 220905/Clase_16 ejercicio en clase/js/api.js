function getCountries() {
    delayFlow();
    return ["Argentina", "Chile", "Uruguay", "Brasil", "Venezuela", "Colombia", "Paraguay", "Bolivia", "Ecuador", "Peru"];
}

function loadAccountStatus(container) {
    delayFlow();
    container.innerHTML += `<li>El saldo de la cuenta es: $${1.400}</li>`;
}

function loadInternationalAccountStatus(container) {
    delayFlow();
    container.innerHTML += `<li>El saldo de la cuenta internacional es: U$S${340}</li>`;
}

function loadCreditCardStatus(container) {
    delayFlow();
    container.innerHTML += `<li>El vencimiento de tu pago de la tarjeta es en: ${9}dias</li>`;
}

function delayFlow() {
    let variable = 0;
    for (let i = 0; i < 999999999; i++) {
        variable++;
        let result = i * 3 + i / 5 * 2;
    }
}