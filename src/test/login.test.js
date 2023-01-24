import { login } from '../js/api/auth/login.js'

describe('login', function () {
  it('stores a token when provided with valid credentials', async function () {
    const data = await login('roxannetests@stud.noroff.no', '12345678')
    // it is expected that data does not return accessToken
    // because it is removed from profile object when a response is ok
    expect(data).not.toHaveProperty('accessToken')
  })
})
