"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add1(a, b) {
    return a + b;
}
exports.add1 = add1;
function add2(a) {
    return function add(b) {
        return a + b;
    };
}
exports.add2 = add2;
