/**
 * @type {import('@remix-run/dev/config').AppConfig}
*/

const intercept = require("intercept-stdout")

// safely ignore recoil warning messages in dev (triggered by HMR)
function interceptStdout(text) {
  if (text.includes("Duplicate atom key")) {
    return ""
  }
  return text
}

if (process.env.NODE_ENV === "development") {
  intercept(interceptStdout)
}
module.exports = {
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildDirectory: "build",
  devServerPort: 8002,
  ignoredRouteFiles: [".*"],
  sourcemap: true
};

