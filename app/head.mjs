import { getStyles } from '@enhance/arc-plugin-styles'

export default function Head(state) {
  const { store = {} } = state

  // pageTitle is set in /app/preflight.mjs
  const { pageTitle = '' } = store

  // Enhance Styles
  // CSS will be included as a <link> tag for local development.
  // For deployments, CSS will be included as a <style> tag in order to eliminate the blocking network request created by <link> tags.
  const styles = process.env.ARC_LOCAL
    ? getStyles.linkTag()
    : getStyles.styleTag()

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>${pageTitle}</title>
      ${styles}
      <link rel="icon" href="/_public/favicon.svg">
      <link rel='stylesheet' href='/_public/css/global.css' />
      <link rel='stylesheet' href='/_public/css/a11y-dark.min.css' />      <meta name="description" content="The HTML first full stack web framework.">
      <style>
        @font-face {
          font-family: "HK Grotesk";
          font-weight: 300;
          src: url("/_public/fonts/HKGrotesk-Light.woff2") format("woff2")
        }

        @font-face {
          font-family: "HK Grotesk";
          font-weight: 400;
          src: url("/_public/fonts/HKGrotesk-Regular.woff2") format("woff2")
        }

        @font-face {
          font-family: "HK Grotesk";
          font-weight: 600;
          src: url("/_public/fonts/HKGrotesk-SemiBold.woff2") format("woff2")
        }

        body {
          color: var(--dark);
          background-color: var(--light);
          text-rendering: optimizeLegibility;
        }

        a {
          text-decoration-thickness: 0.0625em;
          text-underline-offset: 0.0625em;
        }

        ul {
          list-style-position: inside;
          padding-left: 20px;
        }
      </style>
    </head>
    <body class="font-sans">
`
}
