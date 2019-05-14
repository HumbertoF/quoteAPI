class quoteAPI {
    constructor() {
        this.quotes = require ("./quotes.js/index.js").quotes;
        console.log(quotes);
            let  randomValue = quotes[Math.floor(quotes.length * Math.random())];

            console.log(randomValue);
            //TESTING
            

    }
    
}

 module.exports = quoteAPI;