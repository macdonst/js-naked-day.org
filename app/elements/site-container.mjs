export default function SiteContainer({ html }) {
  return html`
        <style>
          :host {
            display: block;
            margin-inline: auto;
            inline-size: var(--site-width);
            max-inline-size: var(--site-max-width);
          }
        </style>

        <slot></slot>
      `
}
