import handleScroll from '../handleScroll'

describe('handleScroll', () => {
  it('set activeStep to 2', () => {
    const mockObject = {
      setState: jest.fn(),
      state: { activeStep: 0 },
    }

    const onHandleScroll = handleScroll.bind(mockObject)

    onHandleScroll(2)()

    expect(mockObject.setState).toHaveBeenCalledWith({
      activeStep: 2,
    })
  })
})
