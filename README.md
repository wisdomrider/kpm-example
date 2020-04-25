## How to make a module?
First of all install kivia module via npm package using

`npm install -g kivia`

After installing kivia you will have access to kpm packages.
Remember to create a id in kivia.
Now install a module named dev using

`kpm install dev`

After installing dev module you can access developer module using `kpm dev`


Then clone this repository and do npm install using `npm install` command

then copy paste the template.js into your modulename.js and start making modules

---
### Keep in Mind (must do *)

##### You can only use the available packages in package.json (otherwise your module will not work because kpm is binded into binary with these modules only)
##### while accessing db you must pass your alias
##### if you want some more important modules then create a issue here will be added in upcoming versions if necessary 
##### module.exports should always point to information of module

---
Watch the example modules located in examples folder for more information:

- ip.js [ip checker module]
- weather.js [weather module]
