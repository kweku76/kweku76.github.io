class CryptoAPI {



// get all the cryptocurrencies - querying the rest api
    async getCryptoCurrenciesList() {
        const url = await fetch('https://api.coinmarketcap.com/v1/ticker/');


        // return this url as a json

        const cryptoCurrencies = await url.json();

        // return the object
        return {
            cryptoCurrencies
        }
    }
}