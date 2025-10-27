import { expect, it, jest } from '@jest/globals'

const forEach = (items: any[], callback: Function) => {
    for (let i = 0; i < items.length; i++) {
        callback(items[i], i)
    }
}

it('mock callback', () => {
    const mockCalledback = jest.fn((x: any) => 42 + x)
    forEach([0, 1], mockCalledback)
    expect(mockCalledback.mock.calls.length).toBe(2)
    expect(mockCalledback.mock.calls[0][0]).toBe(0)
})
