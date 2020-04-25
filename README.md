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
### Some Tips

- all the necessary utils required for creating modules are located in [kivia modules](https://github.com/wisdomrider/kiviamodules) [contribute for more utils] 
- undefined is used for default command of the module example if your module name is kpm then if you pass a undefined json key with parameters as [ip.js](https://github.com/wisdomrider/kpm-example/blob/master/examples/ip.js#L27) then if user type kpm without any args or command then it will be pointed to given function
- exclude can be used in some commands to exclude a command information in help as shown in [ip.js](https://github.com/wisdomrider/kpm-example/blob/master/examples/ip.js#L27)


---
Watch the example modules located in examples folder for more information:

- ip.js [ip checker module]
- weather.js [weather module]
