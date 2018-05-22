require('es6-promise').polyfill();
require('isomorphic-fetch');
const uuidV4 = require('uuid/v4')

const SCRUMBLR_API = process.env.SCRUMBLR_API || 'http://mannyhuerta.org'

const color = ['yellow', 'green', 'blue', 'white'];

const scrumblrFetch = (path, data, method) => (
    fetch(`${SCRUMBLR_API + path}`,
        {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
)

const createCard = (board, text, x, y) => {
    var colorIndex = Math.floor(Math.random() * color.length);
    var rotation = Math.random() * 10 - 5

    const card = {
        id: uuidV4(),
        colour: color[colorIndex],
        rotation,
        text,
        x,
        y
    }

    return scrumblrFetch(`/${board}/card`, card, 'POST')
}

module.exports = {
    createCard
}
