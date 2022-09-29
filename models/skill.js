const skills = [
    { id: 12321, skill: 'HTML', learning: true },
    { id: 23432, skill: 'CSS', learning: true },
    { id: 34543, skill: 'NodeJS', learning: true },
    { id: 45654, skill: 'ExpressJS', learning: true },
    { id: 56765, skill: 'SQL', learning: false },
    { id: 67876, skill: 'React', learning: false }
]

module.exports = {
    getAll,
    getOne
}

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}