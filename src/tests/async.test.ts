import { describe, expect, it, test } from '@jest/globals'
import { fetchData } from '../ts/async'

describe('async', () => {
    it('should return correct todo', () => {
        fetchData(String(1)).then((data) => {
            expect(data.id).toBe(1)
        })
    })
})

describe('should return correct todo', () => {
    test('using async/await', async () => {
        const todo = await fetchData(String(1))
        expect(todo.id).toBe(1)
    })
})
