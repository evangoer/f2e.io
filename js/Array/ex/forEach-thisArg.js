var helloApi = {
    greeting: 'Hello',
    greet: function (value, index) {
        console.log(index + '. ' + this.greeting + ' ' + value);
    }
};

['Cat', 'Dog'].forEach(helloApi.greet, helloApi);
