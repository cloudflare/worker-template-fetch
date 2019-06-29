/**   someHost
 *
 * In the snippet examples,  someHost is set up to return certain responses
 * In this file we document what the someHOST server will return for the corresponding
 * snippet
 */

postJSON = request => `The request body sent in was ` + request.body

fetchHTML = () => `<!DOCTYPE html>
<html>
<body>

<h1>Hello World</h1>
<p>This is all generated using a Worker</p>
<iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
></iframe>

</body>
</html>`

aggregateRequests = (request1, request2) =>
    `The request was a` +
    request1.method +
    `The request was a ` +
    request2.method
