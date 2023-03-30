const { json } = require("express")

var phrases = []

const index = (req,res) => {
    // return all phrases and view
    res.render('phrases/index', {phrases})
}

const store = (req,res) => {
    // store phrase and redirect to index
    phrases.push(req.body.phrase)
    res.json({phrase: req.body.phrase})
}

const destroy = (req,res) => {
    // delete phrase and redirect to index
    phrases.splice(req.params.id, 1)
    res.redirect('/')
}

module.exports = {
    index,
    store,
    destroy
}
