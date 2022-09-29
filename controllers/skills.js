const Skill = require('../models/skill')

module.exports = {
    index,
    show,
    new: newTodo,
    create,
    delete: deleteTodo,
    edit,
    update,
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    })
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
    })
}

function newTodo(req, res) {
    res.render('skills/new')
}

function create(req, res) {
    Skill.create(req.body)
    res.redirect('/skills')
}

function deleteTodo(req, res) {
    Skill.deleteOne(req.params.id)
    res.redirect('/skills')
}

function edit(req, res) {
    res.render('skills/edit', {
        skill: Skill.getOne(req.params.id)
    })
}

function update(req, res) {
    Skill.updateOne(req.params.id, req.body)
    res.redirect(`/skills/${req.params.id}`)
}
