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
        skills: Skill.getAll(),
        title: 'My Skills'
    })
}

function show(req, res) {
    const skill = Skill.getOne(req.params.id)
    res.render('skills/show', {
        skill,
        title: `${skill.skill} Skill`
    })
}

function newTodo(req, res) {
    res.render('skills/new', {
        title: 'Add New Skill'
    })
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
        skill: Skill.getOne(req.params.id),
        title: 'Edit Skill'
    })
}

function update(req, res) {
    Skill.updateOne(req.params.id, req.body)
    res.redirect(`/skills/${req.params.id}`)
}
