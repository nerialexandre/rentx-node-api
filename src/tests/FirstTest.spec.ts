import { User } from '../modules/cars/models/User'

test('it should be ok', () => {
  const user = new User()

  user.name = 'Diego'
  expect(user.name).toEqual('Diego')
})
