const fs = require('fs')

const textIn = fs.readFileSync('./txt/input.txt','utf-8')
console.log(textIn)

const  textOutput = `This is what we know about avocado:\n${textIn}\nCreated on ${new Date()}`
fs.writeFileSync('./txt/output.txt',textOutput)
console.log('The file has been written')