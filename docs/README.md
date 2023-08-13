# SETUP A NODE JS PROJECT WITH TYPESCRIPT 

https://khalilstemmler.com/blogs/typescript/node-starter-project/


# Creating production builds

Lines added in package.json: "build": "rimraf ./build && tsc"


# PRODUCTION MODE: 

npm run build

node build/server.js



# COMMAND TO RUN THE APP

npx nodemon 


# ERROR CASES:

Solved with: 
https://bobbyhadz.com/blog/javascript-error-err-require-esm-require-of-es-module-not-supported


# OTHERS: UNKNOWN FILE EXTENSION ".ts" => rm "type": "module" in package.json 

PowerToys for activating mapped ip to domain