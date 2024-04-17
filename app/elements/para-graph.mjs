export default function Paragraph({ html }) {
  return html`
    <style>
      :host { display: block; }

      p {
        max-inline-size: 72ch;
      }
    </style>
    <p class="mbe0 mi-auto">
      <slot></slot>
    </p>
  `
}
