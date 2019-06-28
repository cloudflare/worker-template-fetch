## fetch

Examples of making fetch requests from within your Worker script including:

-   Generating JSON post requests then reading in the resulting response body
-   Generating GET requests then reading in the resulting response body as HTML
-   Aggregating multiple requests into one response

[`index.js`](https://github.com/cloudflare/worker-template-fetch/blob/master/index.js) is the content of the Workers script. The `snippets` folders holds the logic for individual endpoints' functionality.

Live Demos are hosted on `workers-tooling.cf/demos/fetch`:
[Demo JSON](http://workers-tooling.cf/demos/fetch/json) | [Demo HTML](http://workers-tooling.cf/demos/fetch/html)

#### Wrangler

To generate using [wrangler](https://github.com/cloudflare/wrangler) on a brand new project with all the included snippets.

```
wrangler generate myApp https://github.com/cloudflare/worker-template-fetch
```

#### Serverless

To deploy using serverless add a [`serverless.yml`](https://serverless.com/framework/docs/providers/cloudflare/) file.
