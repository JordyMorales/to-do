const fs = require('fs')

let todoList = []

const downloadDB = ()=> {
    try {
        todoList = require('../db/data.json')
    } catch (error) {
        todoList = []
    }
    return todoList
}
const saveDB = () => {    
    let data = JSON.stringify(todoList)
    fs.writeFile('./src/db/data.json', data, (err) => {
        if (err) 
            console.log(err)
    })
}

const create = (description) => {
    downloadDB()
    let toDo = {
        description,
        completed: false
    }
    todoList.push(toDo)
    saveDB()
    return toDo
}

const getList = () => {
    return downloadDB()
}

const update = ( description, completed = true ) => {
    downloadDB()
    let index = todoList.findIndex(task => task.description == description)
    if(index >= 0 ){
        todoList[index].completed = completed
        saveDB()
        return true
    } else {
        return false
    }
}

const remove = ( description ) => {
    downloadDB()
    let index = todoList.findIndex(task => task.description == description)    
    if( index >= 0 ){
        todoList.splice(index, 1);
        saveDB()
        return true
    } else {
        return false
    }
    // let newtodoList = todoList.filter(task => task.description !== description)
    // if(newtodoList.length === todoList.length){
    //     return false
    // } else {
    //     todoList = newtodoList
    //     saveDB()
    //     return true
    // }
}

module.exports = { create, getList, update, remove }
