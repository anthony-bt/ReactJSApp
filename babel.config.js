module.exports = {
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": [
    "@babel/plugin-transform-runtime"
  ],
  "env": {
    "development": {
      "plugins": ["react-refresh/babel"]
    },
    "production": {
      "plugins": ["@babel/plugin-transform-react-inline-elements"]
    }
  },
  "ignore": [
    "node_modules"
  ]
}
