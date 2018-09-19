import moment, { formatTime, formatDate } from '../moment'

describe('moment', () => {
  describe('with default format', () => {
    it('returns the correct timestamp', () => {
      expect(moment('2017-03-29T08:50:00-03:00').format()).toEqual(
        '2017-03-29T08:50:00-03:00',
      )
    })
  })

  describe('with last sunday format', () => {
    it('returns the correct timestamp', () => {
      expect(
        moment('2017-03-29T08:50:00-03:00')
          .subtract(3, 'days')
          .calendar('2017-03-29'),
      ).toEqual('Último domingo às 08:50')
    })
  })

  describe('with last friday format', () => {
    it('returns the correct timestamp', () => {
      expect(
        moment('2017-03-29T08:50:00-03:00')
          .subtract(5, 'days')
          .calendar('2017-03-29'),
      ).toEqual('Última sexta-feira às 08:50')
    })
  })
})

describe('formatDate', () => {
  it('returns the correct timestamp', () => {
    expect(formatDate('2017-03-29T08:50:00-03:00')).toBe('29 de março de 2017')
  })
})

describe('formatTime', () => {
  it('returns the correct timestamp', () => {
    expect(formatTime('2017-03-29T08:50:00-03:00')).toBe(
      '29 de março de 2017 às 08:50',
    )
  })
})
