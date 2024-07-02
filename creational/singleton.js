function Person() {

    if (typeof Person.instance === 'object')
        return Person.instance;

    Person.instance = this;

    return this;
}

module.exports = Person;


// This pattern is useful when exactly one object is needed to coordinate actions across the system, such as in logging, driver objects, caching, thread pool management, or in database connections.

// How It Works
// The first time new Person() is called, a new instance is created and stored in Person.instance.
// Subsequent calls to new Person() will return the same instance stored in Person.instance, ensuring that there is only one instance of Person throughout the application.