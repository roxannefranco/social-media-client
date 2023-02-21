import { logout } from '../js/api/auth/logout.js'

describe('logout', function () {
  it('clears the token from browser storage', async function () {
    await logout()
    // it is expected that token is null
    expect(localStorage.getItem('token')).toBeNull()
  })
})
