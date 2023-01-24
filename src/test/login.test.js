import { login } from '../js/api/auth/login.js'

describe('login', function () {
  it('stores a token when provided with valid credentials', async function () {
    const promise = await login('roxannetests@stud.noroff.no', '12345678')
    expect(promise).not.toHaveProperty('accessToken')
  })
})
