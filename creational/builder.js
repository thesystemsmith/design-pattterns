function Request() {
    this.url = '';
    this.method = '';
    this.payload = {};
}

function RequestBuilder() {

    this.request = new Request();

    this.forUrl = function (url) {
        this.request.url = url;
        return this;
    };

    this.useMethod = function (method) {
        this.request.method = method;
        return this;
    };

    this.payload = function (payload) {
        this.request.payload = payload;
        return this;
    };

    this.build = function () {
        return this.request;
    };

}

module.exports = RequestBuilder;


// The RequestBuilder class allows you to create Request objects step-by-step by chaining method calls. This pattern is particularly useful for creating complex objects with many optional parameters or configurations.

const request = new RequestBuilder()
    .forUrl('https://example.com')
    .useMethod('GET')
    .payload({ key: 'value' })
    .build();

console.log(request); 
// Output:
// Request {
//   url: 'https://example.com',
//   method: 'GET',
//   payload: { key: 'value' }
// }

// This demonstrates how the Builder pattern simplifies the process of constructing complex objects by allowing method chaining and step-by-step configuration