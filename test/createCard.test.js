const { createCard } = require('../scrumblr')

describe('create card', () => {
    it('should create a card', () => {
        createCard('alexa', "Testing!", 58, 466).then((resp) => {
            console.log(resp)
            assert(resp.status).equals(200)
        })
    })
})