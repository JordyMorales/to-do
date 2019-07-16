const description = {
    demand: true,
    alias: 'd',
    desc: 'Description of the task to do'
}
const completed =  {
    alias: 'c',
    default: true
}

const argv = require('yargs')
    .command('create', 'create a task', {
        description
    })
    .command('update', 'Change the status completed of a task', {
        description,
        completed
    })
    .command('remove', 'remove a task', {
        description
    })
    .help()
    .argv;

module.exports = {
    argv
}