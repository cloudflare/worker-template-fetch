/**
 * Example someHost is set up to respond with JSON and HTML according to the path
 *  */
const someHost = 'https://workers-tooling.cf/demos'
const someJSONURL = someHost + '/requests/json'
const someHTMLURL = someHost + '/static/html'
const someJSONToSend = {
  results: ['default data to send'],
  errors: null,
  msg: 'I sent this to the fetch',
}
const someDefaultJSONToRespond = {
  results: ['default result'],
  errors: null,
  msg: 'success in sending a POST',
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
    const body = await response.text()
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
    body: JSON.stringify(body),
    method: 'POST',
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  }

  const response = await fetch(url, init)
  const results = await gatherResponse(response)
  const retBody = Object.assign(someDefaultJSONToRespond, { results })
  return JSON.stringify(retBody)
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
  let init, respBody;
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
    respBody = fetchPostJson(someJSONURL, someJSONToSend)
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
