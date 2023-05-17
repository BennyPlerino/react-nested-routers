# Module Federation - React Router DOM nested routers

Routing in shell based microfrontends

This example shows how to handle independent and nested routings in a MFE setup based on [webpack-module-federation](https://github.com/module-federation).

The setup consists of:

- `app1` & `app2`: apps are acting as remotes.
- `shell`: host app is based on a browser history

<br>

# Running the demo

Go to each app and perform below steps:

1. Install deps: `npm install`.
2. Start apps: `npm start`.

Visit http://localhost:8080 to navigate `shell` app.
`app1` and `app2` are also exposed as standalone apps at http://localhost:8081 and http://localhost:8082 respectively.
