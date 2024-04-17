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
          font-family: "Newsreader";
          src: url("/_public/fonts/Newsreader.woff2") format("woff2-variations");
          src: url("/_public/fonts/Newsreader.woff2") format("woff2") tech("variations");
          font-weight: 200 800;
        }

        @font-face {
          font-family: "Newsreader";
          src: url("/_public/fonts/Newsreader-Italic.woff2") format("woff2-variations");
          src: url("/_public/fonts/Newsreader-Italic.woff2") format("woff2") tech("variations");
          font-weight: 200 800;
          font-style: italic;
        }

        body {
          color: var(--dark);
          background-color: var(--primary-100);
          text-rendering: optimizeLegibility;
          font-variant-numeric: proportional-nums;
        }

        a[href]:not(.no-underline) {
          text-decoration: underline;
          text-decoration-color: var(--primary-600);
          text-decoration-thickness: 3px;
          text-underline-offset: 0.0625em;
        }

        ul {
          list-style-position: inside;
          padding-left: 20px;
        }
      </style>
    </head>
    <body class="font-serif leading4">
`
}
