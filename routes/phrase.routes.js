const { Router } = require("express")
const { getAll, store } = require("../controllers/phrase.controller")

const phraseRoutes = Router()

phraseRoutes.get('/', getAll)
phraseRoutes.post('/', store)

module.exports = {
    phraseRoutes
}
