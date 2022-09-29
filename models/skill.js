const skills = [
    { id: 12321, skill: 'HTML', learned: true },
    { id: 23432, skill: 'CSS', learned: true },
    { id: 34543, skill: 'NodeJS', learned: true },
    { id: 45654, skill: 'ExpressJS', learned: true },
    { id: 56765, skill: 'SQL', learned: false },
    { id: 67876, skill: 'React', learned: false }
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    updateOne
}

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}

function create(skill) {
    skill.id = Date.now() % 100000
    skill.learned = false
    skills.push(skill)
}

function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
}

function updateOne(id, data) {
    skillToUpdate = getOne(id)
    skillToUpdate.skill = data.skill
    skillToUpdate.learned = !!data.learned
}