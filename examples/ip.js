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

function query(options) { //options contains all the args with key value // here we get {ip:'userinput'}
    kivia.request("http://ip-api.com/json/" + options.ip, {
        type: 'GET',
        prefix: `Fetching information of ${options.ip}.`,
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
    version: 2,
    alias: 'myip',
    author: "wisdomrider",
    email: "avishekzone@gmail.com",
    methods: {
        undefined: {func: ip, args: [], exclude: true, help: [""]},
        query: {func: query, args: ["ip"], help: ["This command helps you to query a ip.", "IP Address"]}
    }
};
module.exports = info;
