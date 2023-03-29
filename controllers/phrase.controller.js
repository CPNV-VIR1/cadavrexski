const { json } = require("express")

phrases = []

const getAll = (req,res) => {
    res.send("salut")
}
const store = (req,res) => {
    res.send(req.body.phrase)
}

module.exports = {
    getAll,
    store
}
