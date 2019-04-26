/**
 *
 * @param {RequestInfo} request the request/url of which to fetch a JSON body from
 * @param {RequestInit=} init optional options to add to the request
 */
async function fetchJson(request, init = {}) {
  try {
    const response = await fetch(request, init)
    const body = await response.json()
    return body
  } catch (error) {
    return { error }
  }
}

/**
 * sendForm sends a form with form pass in
 * @param {FormData} form
 */
const sendForm = async function(form) {
  let init: RequestInit = { headers: { 'content-type': 'multipart/form-data' } }
  let response: Response = {
    body,
    init,
  }
  try {
    return new Response(response)
  } catch (err) {
    return new Response('could not handle the data passede in')
  }
}

addEventListener('fetch', event => {
  const { request, respondWith } = event
  const { url } = request
  // Replace with the routes you wish to serve static resources from
  if (url.includes('/fetch')) return respondWith(fetchJson(request))
  if (url.endsWith('/form')) {
    let body = new FormData()
    let file = new File('file data...', 'filename.txt')
    body.append('username', 'abc123')
    body.append('avatar', file)
    return respondWith(sendForm(body))
  }
  if (url.endsWith('/send-json')) return respondWith(readInPostJsonData(request))
  else {
    event.respondWith(
      new Response(JSON.stringify({ 'from json-found': 'asd' }), {
        headers: { 'content-type': 'application/json' },
      })
    )
  }
})
