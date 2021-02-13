// to solve ReferenceError: regeneratorRuntime is not defined
// https://knowledge.udacity.com/questions/174638
import 'babel-polyfill'

import handleSubmit from '../js/formHandler'

describe('Testing the submit functionality', () => {
  test('Testing the handleSubmit() function', () => {
    expect(handleSubmit).toBeDefined()
  })
})
