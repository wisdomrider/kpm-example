#!/usr/bin/env node
const kivia = require("kiviamodules");


function ip() {

}

const info = {
    name: "Template Module",
    description: "This is a template module.",
    version: 1,
    alias: 'template',
    author: "template",
    email: "template@example.com",
    methods: {
        default: {func: ip, args: [], help: [""]}
    }
};
module.exports = info;
