const skills = [
    { skill: 'HTML', learning: true },
    { skill: 'CSS', learning: true },
    { skill: 'NodeJS', learning: true },
    { skill: 'ExpressJS', learning: true },
    { skill: 'SQL', learning: false },
    { skill: 'React', learning: false }
]

module.exports = {
    getAll
}

function getAll() {
    return skills
}