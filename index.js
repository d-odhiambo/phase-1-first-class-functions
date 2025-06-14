function receivesAFunction (callback) {
    callback();
}
function returnsANamedFunction() {
    return function namedFunction() {
        return "Hello from named function!";
    };
}

function returnsAnAnonymousFunction() {
    return function () {
        return "Hello from anonymous function!";
    };
}
