const {join} = require('path')
const {readConsumer} = require('@iconduit/consumer')

module.exports = readConsumer(join(__dirname, "site.iconduitmanifest"))
