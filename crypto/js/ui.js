class UI {
    constructor() {
        this.init();
    }
    init() {
        this.printCryptoCurrencies ();
    }
    // prints the select <option> for the form
    printCryptoCurrencies () {
        cryptoAPI.getCryptoCurrenciesList ()
        .then(data => {
            console.log(data);
            const cryptoCurrencies = data.cryptoCurrencies;
            
            
            // build the select from the API
            const select = document.getElementById('cryptocurrency');

            cryptoCurrencies.forEach(currency => {
                // add the option
                const option = document.createElement('option');
                option.value - currency.id;
                option.appendChild(docuemnt.createTextNode
                    (currency.name));
                    select.appendChild(option);
            })
        })
    }
}