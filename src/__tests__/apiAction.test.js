import apiAction from '../apiAction'

describe('with default GET method and successful JSON response', () => {
  it('dispatches the correct actions', async () => {
    const dispatch = jest.fn()

    const response = {
      ok: true,
      text: () => JSON.stringify({ foo: 'bar' }),
      headers: {
        get: () => 'application/json',
      },
    }

    global.fetch = jest.fn(() => new Promise(resolve => resolve(response)))

    const action = apiAction({
      prefix: '@foo/BAR',
      path: '/foo/bar',
      processResponse: (response, json) => ({ response, json }),
    })

    await action(dispatch)

    expect(dispatch).toHaveBeenCalledTimes(2)
    expect(dispatch).toHaveBeenCalledWith({ type: '@foo/BAR_REQUEST' })

    expect(dispatch).toHaveBeenCalledWith({
      json: { foo: 'bar' },
      response,
      type: '@foo/BAR_SUCCESS',
    })
  })
})

describe('with default GET method and successful text response', () => {
  it('dispatches the correct actions', async () => {
    const dispatch = jest.fn()

    const response = {
      ok: true,
      text: () => 'foo bar',
      headers: {
        get: () => 'text/html',
      },
    }

    global.fetch = jest.fn(() => new Promise(resolve => resolve(response)))

    const action = apiAction({
      prefix: '@foo/BAR',
      path: '/foo/bar',
      processResponse: (response, json) => ({ response, json }),
    })

    await action(dispatch)

    expect(dispatch).toHaveBeenCalledTimes(2)
    expect(dispatch).toHaveBeenCalledWith({ type: '@foo/BAR_REQUEST' })

    expect(dispatch).toHaveBeenCalledWith({
      json: { id: 'undefined', message: 'foo bar' },
      response,
      type: '@foo/BAR_SUCCESS',
    })
  })
})

describe('with POST method and failed response', () => {
  it('dispatches the correct actions', async () => {
    const dispatch = jest.fn()

    const response = {
      ok: false,
      text: () => JSON.stringify({ foo: 'bar' }),
      headers: {
        get: () => 'application/json',
      },
    }

    global.fetch = jest.fn(() => new Promise(resolve => resolve(response)))

    const action = apiAction({
      prefix: '@foo/BAR',
      path: '/foo/bar',
      method: 'POST',
      params: { foo: 'bar' },
      processResponse: (response, json) => ({ response, json }),
    })

    await action(dispatch)

    expect(dispatch).toHaveBeenCalledTimes(2)
    expect(dispatch).toHaveBeenCalledWith({ type: '@foo/BAR_REQUEST' })

    expect(dispatch).toHaveBeenCalledWith({
      error: { foo: 'bar' },
      type: '@foo/BAR_FAILURE',
    })
  })
})

describe('with POST method and with newtwork error', () => {
  it('dispatches the correct actions', async () => {
    const dispatch = jest.fn()

    const response = {
      ok: false,
      text: () => JSON.stringify({ foo: 'bar' }),
      headers: {
        get: () => 'application/json',
      },
    }

    global.fetch = jest.fn(
      () => new Promise((resolve, reject) => reject(response)),
    )

    const action = apiAction({
      prefix: '@foo/BAR',
      path: '/foo/bar',
      method: 'POST',
      params: { foo: 'bar' },
      processResponse: (response, json) => ({ response, json }),
    })

    await action(dispatch)

    expect(dispatch).toHaveBeenCalledTimes(2)
    expect(dispatch).toHaveBeenCalledWith({ type: '@foo/BAR_REQUEST' })

    expect(dispatch).toHaveBeenCalledWith({
      error: { foo: 'bar' },
      type: '@foo/BAR_FAILURE',
    })
  })
})
