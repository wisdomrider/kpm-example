#!/usr/bin/env node
const kivia = require("kiviamodules");


function ip() {

}

const info = {
    name: "Weather Module",
    description: "This module remembers your location and tells you about weather.",
    version: 1,
    alias: 'weather',
    author: "wisdomrider",
    email: "avishekzone@gmail.com",
    methods: {
        default: {func: ip, args: [], help: [""]}
    }
};
module.exports = info;
