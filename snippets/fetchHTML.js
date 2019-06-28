import gatherResponse from './lib/gatherResponse'

/**
 * Example someHost is set up to respond with JSON and HTML according to the path
 * receive-server.js contains a Worker script for a basic implementation
 *  */
const someHost = 'https://workers-tooling.cf/demos'
const url = someHost + '/static/html'

/**
 * handleRequest sends a GET request expecting html
 * Use await handleRequest(..) in an async function to get the HTML
 * @param {Request} request the incoming request
 */
export async function handleRequest(request) {
  const init = {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  }
  console.log('asfetchd')
  const response = await fetch(url, init)
  const results = await gatherResponse(response)
  return new Response(results, init)
}
