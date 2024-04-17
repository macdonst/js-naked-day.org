export default function UL({ html }) {
  return html`
    <style>
      :host {
        display: block;
        inline-size: min(90vw, 72ch);
        margin-inline: auto;
      }
    </style>
    <ul class="pi-none font-semibold">
      <slot></slot>
    </ul>
  `
}
