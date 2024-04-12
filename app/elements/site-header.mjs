export default function SiteHeader ({ html }) {
  return html`
      <style>
        h1, p {
          text-align: var(--align-heading);
        }
      </style>
      <header>
        <h1 class='text3 font-heading font-bold tracking-1 pbs4 pbe0'>
          <a href='/' class='no-underline'>
            JS Naked Day
          </a>
        </h1>
        <p class='font-body text0 pbe-2'>
          The web should work without JavaScript
        </p>
      </header>
    `
}
