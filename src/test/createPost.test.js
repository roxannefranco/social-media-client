import { createPost } from '../js/api/posts/create.js'
import { login } from '../js/api/auth/login.js'

describe('createPost', function () {
  it('returns a valid item with a valid input', async function () {
    // user must login first to store token and be able to create a post
    await login('roxannetests@stud.noroff.no', '12345678')
    const response = await createPost('title test', 'test body', '', [
      'test tag'
    ])
    // expects response with id property
    expect(response).toHaveProperty('id')
  })
})
