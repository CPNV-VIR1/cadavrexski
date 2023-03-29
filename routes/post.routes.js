const { Router } = require("express")
const { getAll } = require("../controllers/post.controller")

const postRoutes = Router()

postRoutes.get('/', getAll)

module.exports = {
    postRoutes
}