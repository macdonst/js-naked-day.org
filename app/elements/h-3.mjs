export default function H3({ html }) {
  return html`
    <style>
      :host {
        display: block;
        color: var(--gray-700);
      }
    </style>
    <h3 class="font-semibold leading1 text2 tracking-1 mbe0">
      <slot></slot>
    </h3>
  `
}
