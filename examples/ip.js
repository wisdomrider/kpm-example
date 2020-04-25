#!/usr/bin/env node
const print = (data) => console.log(data);
const kivia = require("kiviamodules");


function ip() {
    kivia.request("http://ip-api.com/json", {
        type: 'GET',
        prefix: 'Fetching your ip.',
        callback: (data) => {
            delete data.status;
            data.ip = data.query;
            delete data.query;
            kivia.makeItem(data);
        }
    })
}

const info = {
    name: "My Ip",
    description: "MyIP gives information about your current ip address.\ntype [kpm myip] to get information about your ip.",
    version: 1,
    alias: 'myip',
    author: "wisdomrider",
    email: "avishekzone@gmail.com",
    methods: {
        undefined: {func: ip, args: [], exclude: true, help: [""]}
    }
};
module.exports = info;
