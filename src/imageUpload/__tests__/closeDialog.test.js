import closeDialog from '../closeDialog'

const push = jest.fn()

describe('with closeUrl', () => {
  it('calls function correctly', () => {
    const props = {
      history: { push },
      redirectUrl: '/foo/redirect',
      closeUrl: '/foo/close',
    }

    closeDialog(props)()
    expect(push).toHaveBeenCalledWith(`/foo/close`)
  })
})

describe('with redirectUrl', () => {
  it('calls function correctly', () => {
    const props = {
      history: { push },
      redirectUrl: '/foo/redirect',
    }

    push.mockClear()
    closeDialog(props)()
    expect(push).toHaveBeenCalledWith(`/foo/redirect`)
  })
})
