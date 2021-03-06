# Mockserver

Backend testing

## Run Mockserver

Start local server

```bash
node server.js
```

You can also view in the browser by:

- Going to http://localhost:3001/mockserver/dashboard

---

### Docs

[MockServer](https://www.mock-server.com/mock_server/getting_started.html) allows you to mock any server or service via HTTP or HTTPS, such as a REST or RPC service.

This is useful in the following scenarios:

- testing
  - easily recreate all types of responses for HTTP dependencies such as REST or RPC services to test applications easily and affectively
  - isolate the system-under-test to ensure tests run reliably and only fail when there is a genuine bug. It is important only the system-under-test is tested and not its dependencies to avoid tests failing due to irrelevant external changes such as network failure or a server being rebooted / redeployed.
  - easily setup mock responses independently for each test to ensure test data is encapsulated with each test. Avoid sharing data between tests that is difficult to manage and maintain and risks tests infecting each other
  - create test assertions that verify the requests the system-under-test has sent
- de-coupling development
  - start working against a service API before the service is available. If an API or service is not yet fully developed MockServer can mock the API allowing any team who is using the service to start work without being delayed
  - isolate development teams during the initial development phases when the APIs / services may be extremely unstable and volatile. Using MockServer allows development work to continue even when an external service fails
- isolate single service
  - during deployment and debugging it is helpful to run a single application or service or handle a sub-set of requests on on a local machine in debug mode. Using MockServer it is easy to selectively forward requests to a local process running in debug mode, all other request can be forwarded to the real services for example running in a QA or UAT environment
- Examples
  - [Mockserver-node](https://github.com/mock-server/mockserver-node/tree/master/examples)

---

### NPM Packages

- [Mockserver](https://www.npmjs.com/package/mockserver-node)

### Debugging

Find active server

```js
lsof -i :<PORT>

kill -9 <PID>
```
