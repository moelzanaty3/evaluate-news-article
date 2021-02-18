import { checkUrl } from "../js/checkURL";

describe('Test check URL functionality', () => {
    test('Testing the checkURL function', () => {
        expect(checkUrl).toBeDefined()
    })

    test('checkUrl return false for invalid url', () => {
        expect(checkUrl('elzanaty')).toBeFalsy()
    })

    test('checkUrl return true for valid url', () => {
        expect(checkUrl('http://example.com')).toBeTruthy()
    })
})