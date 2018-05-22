const { createCard } = require('../scrumblr')

const YOUR_NAME = '' // put your name in between the single quotes

describe('create card', () => {
    it('should create a card', () => {
        expect(YOUR_NAME.length).toBeGreaterThan(0)
        createCard('alexa', `${YOUR_NAME}`, 58, 466).then((resp) => {
            console.log(resp)
            expect(resp.status).toBe(200)
        })
    })
})