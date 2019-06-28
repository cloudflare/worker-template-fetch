import { handleRequest as postFetch } from './snippets/postJSON'
import { handleRequest as fetchHTML } from './snippets/fetchHTML'

addEventListener('fetch', event => {
    const { request } = event
    const { url } = request

    // Set default response
    let response = new Response('Endpoint not found', {
        status: 404,
    })

    if (url.endsWith('/html')) {
        response = fetchHTML(request)
    }
    if (url.endsWith('/json')) {
        response = postFetch(request)
    }

    // return the assigned response to the requester
    return event.respondWith(response)
})
