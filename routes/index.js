const { Router } = require("express")
const { postRoutes } = require("./post.routes")
const router = Router()
router.use("/posts", postRoutes)

module.exports = {
    router
}