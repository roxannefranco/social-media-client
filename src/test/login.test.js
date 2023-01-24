import { login } from '../js/api/auth/login.js'

describe('login', function () {
  it('stores a token when provided with valid credentials', async function () {
    await login('roxannetests@stud.noroff.no', '12345678')
    // it is expected that token is not null
    expect(localStorage.getItem('token')).not.toBeNull()
  })
})
