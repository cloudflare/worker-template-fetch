/**
 * gatherResponse awaits and returns a response body as a string.
 * Use await gatherResponse(..) in an async function to get the response body
 * @param {Response} response
 */
export default async function gatherResponse(response) {
    const { headers } = response
    const contentType = headers.get('content-type')

    if (contentType.includes('application/json')) {
        const body = await response.json()
        return body
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
