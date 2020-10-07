const assert = require('chai').assert
const RegexEasy =  require('../index')

describe('regex easy test', () => {

    it('should return true if value is a string', () => {
        const value = 'nootim'
        const result = RegexEasy.test.no.numbers(value)
        assert.equal(result, true)
    })

    it('should return true if value is a number and a letter "p9"', () => {
        const value = 'p9'
        const result = RegexEasy.test.no.numbers(value)
        assert.equal(result, true)
    })

    it('should return false if value is a "string" number', () => {
        const value = '229'
        const result = RegexEasy.test.no.numbers(value)
        assert.equal(result, false)
    })

    it('should return false if value is a number', () => {
        const value = 229
        const result = RegexEasy.test.no.numbers(value)
        assert.equal(result, false)
    })

    
})