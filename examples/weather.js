#!/usr/bin/env node
const kivia = require("kiviamodules");
const print = (a) => console.log(a)
const enquirer = require("enquirer");
const chalk = require("chalk");
const db = kivia.getDb("weather")

function getDefaultLocation(cb) {
    const checkLocation = db.get('location', null)
    if (checkLocation) cb(checkLocation)
    else {
        enquirer.prompt({
            type: 'input',
            name: 'location',
            message: 'Enter your home location'
        }).then(location => {
            db.set('location', location.location)
            cb(location.location)
        })
    }
}

function getKey(cb) {
    const checkToken = db.get("apiKey", null);
    if (checkToken) cb(checkToken);
    else {
        print(chalk.red("Oh oh ! looks like you have not added a key yet.Get it from \n") + chalk.green("https://openweathermap.org/home/sign_up"))
        enquirer.prompt(
            {
                type: 'input',
                name: 'key',
                message: 'Paste your api key here.'
            }
        ).then(s => {
            db.set('apiKey', s.key)
            cb(s.key)
        })
    }
}

function weather() {
    getKey((key) => {
        getDefaultLocation((location) => {
            kivia.request(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=` + key, {
                method: 'GET',
                prefix: `Fetching weather of ${location} .`,
                callback: (data) => {
                    parseLocation(data);
                }, errorcallBack: (e) => {
                    if (e.isAxiosError && !e.response) {
                        console.log(chalk.red("  Error : Please check your internet connection."))
                    } else {
                        console.log(chalk.red("  Error : " + e.response.data.message) + "\n" + chalk.yellowBright("Note : if you have just created the key then it may take some time to be work or reenter key by typing [kpm weather regenerate]."));
                    }
                }
            })

        })

    })
}

function parseLocation(json) {
    console.log(json);
}

function regenerate() {
    db.set('apiKey', null);
    getKey((key) => {
        console.log(chalk.green("Api key updated successfully."))
    });
}

function renewLocation() {
    db.set('location', null);
    getDefaultLocation((key) => {
        console.log(chalk.green("Default location updated successfully."))
    });
}

function query(opts) {
    getKey(key => {
        kivia.request(`https://api.openweathermap.org/data/2.5/weather?q=${opts.location}&appid=` + key, {
            method: 'GET',
            prefix: `Fetching weather of ${opts.location} .`,
            callback: (data) => {
                parseLocation(data);
            }, errorcallBack: (e) => {
                if (e.isAxiosError && !e.response) {
                    console.log(chalk.red("  Error : Please check your internet connection."))
                } else {
                    console.log(chalk.red("  Error : " + e.response.data.message) + "\n" + chalk.yellowBright("Note : if you have just created the key then it may take some time to be work or reenter key by typing [kpm weather regenerate]."));
                }
            }
        })

    })
}

const info = {
    name: "Weather Module",
    description: "This module remembers your location and tells you about weather.",
    version: 1,
    alias: 'weather',
    author: "wisdomrider",
    email: "avishekzone@gmail.com",
    methods: {
        undefined: {func: weather, exclude: true, args: [], help: [""]},
        regenerate: {func: regenerate, args: [], help: ["To enter key again"]},
        renewlocation: {
            func: renewLocation,
            args: [],
            help: ["To enter your default location again"]
        },
        query: {
            func: query,
            args: ['location'],
            help: ["To fetch weather of a specific location", "Location Name"]
        }

    }
};
module.exports = info;
