export default function TextContainer({ html }) {
  return html`
      <style>
        :host {
          display: block;
          max-inline-size: 68ch;
        }

        p + p {
          margin-block-start: 1rem;
        }
      </style>
      <slot></slot>
    `
}
