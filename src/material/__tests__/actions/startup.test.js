import { startUp } from '../../actions'

describe('with parameters', () => {
  it('returns the correct type and data', () => {
    expect(startUp()).toEqual({ type: '@material/START_UP' })
  })
})
