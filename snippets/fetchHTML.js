import gatherResponse from './lib/gatherResponse'

/**
 * Example someHost at url is set up to respond with HTML
 * Replace url with the host you wish to send requests to
 *  */
const someHost = 'https://workers-tooling.cf/demos'
const url = someHost + '/static/html'

/**
 * handleRequest sends a GET request expecting html
 * and then returns a response with that HTML
 * @param {Request} request the incoming request
 */
export async function handleRequest(request) {
    const init = {
        headers: {
            'content-type': 'text/html;charset=UTF-8',
        },
    }

    const response = await fetch(url, init)
    const results = await gatherResponse(response)

    return new Response(results, init)
}
