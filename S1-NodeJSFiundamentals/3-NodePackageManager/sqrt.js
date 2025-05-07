const sqrt = require("math-sqrt");

const add = require("./util");

const express = require('express');

let x;

for( let i=0; i< 100; i++) {
    // x = Math.round(i);
    console.log(sqrt(i));
}

console.log("Add", add(4, 5));