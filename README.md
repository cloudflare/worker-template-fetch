## fetch

Examples of making fetch requests from within your Worker script including generating JSON post requests then reading in the resulting response body, aggregating multiple requests into one response, and following/catching redirects.

[`index.js`](https://github.com/cloudflare/worker-template-fetch/blob/master/index.js) is the content of the Workers script.

Live Demos are hosted on `workers-tooling.cf/demos/fetch`:
[Demo JSON](http://workers-tooling.cf/demos/fetch/json) | [Demo HTML](http://workers-tooling.cf/demos/fetch/html)

#### Wrangler
To generate using [wrangler](https://github.com/cloudflare/wrangler)

```
wrangler generate myApp https://github.com/cloudflare/worker-template-fetch
```

#### Serverless
To deploy using serverless add a [`serverless.yml`](https://serverless.com/framework/docs/providers/cloudflare/) file.
