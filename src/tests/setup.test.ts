import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it } from '@jest/globals'

let animals = ['elephant', 'zebra', 'bear', 'tiger']

describe('animals array', () => {
    beforeAll(() => {
        console.log('BEFOREALL')
        animals = []
    })

    beforeEach(() => {
        console.log('BEFOREEACH')

        animals = ['elephant', 'zebra', 'bear', 'tiger']
    })
    afterEach(() => {
        console.log('AFTEREACH')

        animals = ['elephant', 'zebra', 'bear', 'tiger']
    })
    afterAll(() => {
        console.log('AFTERALL')
        animals = []
    })

    it('should add animal to end of array', () => {
        animals.push('lion')
    })

    it('should add to beginning of array', () => {
        animals.unshift('giraffe')
        expect(animals[0]).toBe('giraffe')
    })

    it('should have initial length of 4', () => {
        expect(animals.length).toBe(4)
    })
})

describe('should return true', () => {
    it('true ', () => {
        expect(true).toBeTruthy()
    })
})
