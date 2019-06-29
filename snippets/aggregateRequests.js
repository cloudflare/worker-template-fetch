import gatherResponse from './lib/gatherResponse'

/**
 * Example someHost is set up to return JSON responses
 * Replace url1 and url2  with the hosts you wish to
 * send requests to
 * @param {string} url the URL to send the request to
 */
const someHost = 'https://workers-tooling.cf/demos'
const url1 = someHost + '/requests/json'
const url2 = someHost + '/requests/json'
const type = 'application/json;charset=UTF-8'

/**
 * handleRequest sends a GET request to two urls
 * and aggregates the responses into one response
 * @param {Request} request the incoming request
 */
export async function handleRequest(request) {
    const init = {
        headers: {
            'content-type': type,
        },
    }

    const responses = await Promise.all([fetch(url1, init), fetch(url2, init)])
    const results = await Promise.all([
        gatherResponse(responses[0]),
        gatherResponse(responses[1]),
    ])

    return new Response(results, init)
}
