function receivesAFunction(callback) {
    return callback();
}

function namedFunction() {
    return "named function";
}

function returnsANamedFunction() {
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return () => "anonymous function";
}