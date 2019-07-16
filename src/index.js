const { argv } = require('./config/yargs')
const colors = require('colors');
const { create, getList, update, remove } = require('./toDo/toDo')

let command = argv._[0]

switch (command) {
    case 'create':
        create(argv.description)
        break;
    case 'list':
        const list = getList()
        for (let i = 0; i < list.length; i++) {
            console.log('==========To DO==========='.green)
            console.log(list[i].description)
            console.log('State: ', list[i].completed)
            console.log('=========================='.green)            
        }
        break;
    case 'update':
        let completed = update(argv.description, argv.completed)
        console.log(completed)
        break;
    case 'remove':
        let deleted = remove(argv.description)
        console.log(deleted)
        break;
    default:
        console.log('command undefined')
        break;
}