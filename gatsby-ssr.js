const React = require("react")

exports.onRenderBody = ({
  setPreBodyComponents,
  setHeadComponents,
  setPostBodyComponents,
  setBodyAttributes,
}) => {
  setPreBodyComponents([<div id="preloader"></div>])
  setHeadComponents([
    <link as="script" rel="preload" href="/scripts/preloader.js" />,
  ])
  setPostBodyComponents([<script src="/scripts/preloader.js" />])
  setBodyAttributes({
    className: "preloader-active",
  })
}
