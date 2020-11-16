module.exports = (req, res) => {
    const low = require('lowdb')
    const FileSync = require('lowdb/adapters/FileSync')
    const adapter = new FileSync('db.json')
    const db = low(adapter)
    db.read()
        .then(() => console.log('Content of my_project/db.json is loaded'))
    name = db.get('posts')
        .map('title')
        .value()
    console.log(name)
    res.send(name)
}