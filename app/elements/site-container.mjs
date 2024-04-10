export default function BlogContainer({ html }) {
  return html`
        <style>
          :host {
            display: block;
            max-width: 90vw;
            margin-inline: auto;
          }

          @media screen and (min-width: 48em) {
            :host {
              max-width: 82ch;
            }
          }
        </style>

        <slot></slot>
      `
}
