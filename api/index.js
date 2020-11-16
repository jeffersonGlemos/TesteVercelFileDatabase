module.exports = (req, res) => {
    const adapter = new FileSync('db.json')
    db.read()
        .then(() => console.log('Content of my_project/db.json is loaded'))
    name = db.get('posts')
        .map('title')
        .value()
    res.send(name)
}