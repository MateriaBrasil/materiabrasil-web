import {reset,add, remove, open, close} from '../actions'

describe('reset', () => {
    it('returns as expected', () => {
        expect(reset()).toMatchObject({ type: '@comparison/RESET' })
    } )
})

describe('add', () => {
    it('returns as expected', () => {
        const item = { foobar: 'foo' }
        expect(add(item)).toMatchObject({ type: '@comparison/ADD', item })
    } )
})

describe('remove', () => {
    it('returns as expected', () => {
        const item = { foobar: 'foo' }
        expect(remove(item)).toMatchObject({ type: '@comparison/REMOVE', item })
    } )
})

describe('open', () => {
    it('returns as expected', () => {
        expect(open()).toMatchObject({ type: '@comparison/OPEN' })
    } )
})

describe('close', () => {
    it('returns as expected', () => {
        expect(close()).toMatchObject({ type: '@comparison/CLOSE' })
    } )
})