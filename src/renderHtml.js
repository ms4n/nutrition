var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/templates/basic/renderHtml.js
var integrationName = "Supabase";
var iconURL = "https://imagedelivery.net/wSMYJvS3Xw-n339CbDyDIA/281012e9-2fdd-4039-69f8-bef12da84400/public";
async function renderHtml() {
  const svg = await getIntegrationSvg();
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${integrationName}</title>
  <link rel="stylesheet" type="text/css" href="https://templates.cloudflareintegrations.com/styles.css">
</head>
<body>
<header>
  ${svg}
  <h1>
    \u{1F389} Successfully connected to ${integrationName}
  </h1>
</header>
</body>
</html>
`;
}
__name(renderHtml, "renderHtml");
async function getIntegrationSvg() {
  const svg = await fetch("https://templates.cloudflareintegrations.com/connection_graphic.svg").then((s) => s.text()).then((s) => s.replace("icon_url", iconURL));
  return svg;
}
__name(getIntegrationSvg, "getIntegrationSvg");
export {
  renderHtml as default
};
