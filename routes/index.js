const { Router } = require("express")
const { phraseRoutes } = require("./phrase.routes")
const router = Router()
router.use("/phrases", phraseRoutes)

module.exports = {
    router
}
