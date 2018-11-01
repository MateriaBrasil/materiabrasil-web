import handleStep from '../handleStep'
import scrollToDocument from '../scrollToDocument'

jest.mock('../scrollToDocument', () => jest.fn())

describe('handleStep', () => {
  it('set activeStep to 2', () => {
    const mockObject = {
      setState: jest.fn(),
      state: { activeStep: 0 },
    }

    const onHandleStep = handleStep.bind(mockObject)

    onHandleStep(2)()

    expect(mockObject.setState).toHaveBeenCalledWith({
      activeStep: 2,
    })
    expect(scrollToDocument).toHaveBeenCalledWith('drivers')
  })
})
