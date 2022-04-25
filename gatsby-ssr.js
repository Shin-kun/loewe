const React = require("react")

exports.onRenderBody = ({
  setPreBodyComponents,
  setHeadComponents,
  setPostBodyComponents,
}) => {
  setPreBodyComponents([<div id="preloader"></div>])
  setHeadComponents([
    <link as="script" rel="prerender" href="/scripts/preloader.js" />,
  ])
  setPostBodyComponents([<script src="/scripts/preloader.js" />])
}
