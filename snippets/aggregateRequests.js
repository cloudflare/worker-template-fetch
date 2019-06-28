import gatherResponse from './lib/gatherResponse'

/**
 * Example someHost is set up to take in a JSON request
 * @param {string} url the URL to send the request to
 */
const someHost = 'https://workers-tooling.cf/demos'
const url = someHost + '/requests/json'
const type = 'application/json;charset=UTF-8'

/**
 * handleRequest sends a POST request with JSON data and
 * and reads in the response body.
 * @param {Request} request the incoming request
 */
export async function handleRequest(request) {
    const init = {
        headers: {
            'content-type': type,
        },
    }

    const response1 = fetch(url, init)
    const response2 = fetch(url, init)
    const responses = await Promise.all([response1, response2])

    const result1 = gatherResponse(responses[0])
    const result2 = gatherResponse(responses[1])
    const results = await Promise.all([result1, result2])

    return new Response(results, init)
}
