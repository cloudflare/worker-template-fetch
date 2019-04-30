/**
 * Example Input
 *  */
const someHost = 'http://victoriacf.tk/' //"http://workers-tooling.cf/fake-origin"
const someURL = someHost + '/json'
const someHTMLURL = someHost + '/html'
const someJSON = {
  result: ['some', 'results'],
  errors: null,
  msg: 'this is some random json',
}

/**
 * gatherResponse awaits and returns a response body as a string.
 * Use await gatherResponse(..) in an async function to get the response body
 * @param {Response} response to
 */
async function gatherResponse(response) {
  const { headers } = response
  const contentType = headers.get('content-type')

  if (contentType.includes('application/json')) {
    const body = await response.json()
    return JSON.stringify(body)
  } else if (contentType.includes('application/text')) {
    const body = await response.text()
    return body
  } else if (contentType.includes('text/html')) {
    const body = await response.text()
    return body
  } else {
    const body = await response.body()
    return body
  }
}

/**
 * readRequestBody reads in the incoming request body
 * Use await readRequestBody(..) in an async function to get the string
 * @param {Request} request the incoming request to read from
 */
async function readRequestBody(request) {
  const { headers } = request
  const contentType = headers.get('content-type')

  if (contentType.includes('application/json')) {
    const body = await request.json()
    return JSON.stringify(body)
  } else if (contentType.includes('application/text')) {
    const body = await request.text()
    return body
  } else if (contentType.includes('text/html')) {
    const body = await request.text()
    return body
  } else {
    const body = await request.body()
    return body
  }
}

/**
 * fetchPostJson sends a POST request with data in JSON and
 * and reads in the response body. Use await fetchPostJson(..)
 * in an async function to get the response body
 * @param {string} url the URL to send the request to
 * @param {BodyInit} body the JSON data to send in the request
 */
async function fetchPostJson(url, body = {}) {
  const init = {
    body,
    method: 'POST',
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  }

  const response = await fetch(url, init)
  const respBody = await gatherResponse(response)
  return respBody
}

/**
 * fetchGetHtml sends a GET request expecting html
 * Use await fetchGetHtml(..) in an async function to get the HTML
 * @param {string} url the URL to send the request to
 */
async function fetchGetHtml(url) {
  const init = {
    method: 'Get',
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  }

  const response = await fetch(url)
  const respBody = await gatherResponse(response)
  return respBody
}

/**
 * fetchGetHtml sends a GET request expecting html
 * Use await fetchGetHtml(..) in an async function to get the HTML
 * @param {string} url the URL to send the request to
 */
async function fetchGetHtml(url) {
  const init = {
    method: 'Get',
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  }

  const response = await fetch(url)
  const respBody = await gatherResponse(response)
  return respBody
}

/**
 * Example of how fetch methods above can be used in an application
 *  */

addEventListener('fetch', async event => {
  const { url, method } = event.request

  // Set respBody and init according to the route
  // and method of the incoming request
  if (url.endsWith('/html')) {
    init = {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
      },
    }
    respBody = fetchGetHtml(someHTMLURL)
  }

  if (url.endsWith('/json')) {
    init = {
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    }
    if (method === 'GET') respBody = fetchPostJson(someURL, someJSON)
    if (method === 'POST') respBody = readRequestBody(event.request)
  }

  // Turn the the respBody string into a Response
  // return this response to the requester
  event.respondWith(
    (async function() {
      const body = await respBody
      return new Response(body, init)
    })()
  )
})
